import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { supabase } from "../../utils/supabaseClient";
import styled from "styled-components";

const DashboardContainer = styled(Container)`
  padding-top: 6rem;
  padding-bottom: 4rem;
  min-height: 100vh;
`;

const StatCard = styled(Card)`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.cardBorderColor};
  color: ${(props) => props.theme.color};
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 3rem;
    color: ${(props) => props.theme.accentColor};
    font-family: var(--font-mono);
  }
`;

const ChartWrapper = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.cardBorderColor};
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  height: 400px;
`;

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#e07a5f",
  "#3d405b",
  "#81b29a",
];

interface PageView {
  id: string;
  created_at: string;
  path: string;
  country: string;
  browser?: string;
  os?: string;
}

export default function Dashboard() {
  const [data, setData] = useState<PageView[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: views, error } = await supabase
        .from("page_views")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching analytics:", error);
      } else {
        setData(views || []);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <DashboardContainer>
        <h3 className="text-center mt-5">Loading Analytics...</h3>
      </DashboardContainer>
    );
  }

  // Aggregate Data
  const totalViews = data.length;

  const viewsByPage = data.reduce(
    (acc, curr) => {
      acc[curr.path] = (acc[curr.path] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const pagesData = Object.keys(viewsByPage)
    .map((path) => ({
      name: path === "/" ? "Home" : path.replace("/", ""),
      views: viewsByPage[path],
    }))
    .sort((a, b) => b.views - a.views);

  const viewsByCountry = data.reduce(
    (acc, curr) => {
      acc[curr.country] = (acc[curr.country] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const countryData = Object.keys(viewsByCountry)
    .map((country) => ({
      name: country,
      value: viewsByCountry[country],
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10); // Top 10

  return (
    <DashboardContainer fluid>
      <h2 className="mb-4" style={{ fontFamily: "var(--font-mono)" }}>
        Site Analytics
      </h2>
      <Row>
        <Col md={12}>
          <StatCard>
            <h4>Total Page Views</h4>
            <h2>{totalViews}</h2>
          </StatCard>
        </Col>
      </Row>

      <Row>
        <Col lg={7} md={12}>
          <ChartWrapper>
            <h4 className="mb-4 text-center">Views by Page</h4>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                data={pagesData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
                <Legend />
                <Bar dataKey="views" fill="#00a0ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Col>

        <Col lg={5} md={12}>
          <ChartWrapper>
            <h4 className="mb-4 text-center">Top Countries</h4>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  data={countryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${((percent || 0) * 100).toFixed(0)}%`
                  }
                >
                  {countryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <ChartWrapper>
            <h4 className="mb-4 text-center">Top Browsers</h4>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  data={Object.entries(
                    data.reduce(
                      (acc, curr) => {
                        const b = curr.browser || "Unknown";
                        acc[b] = (acc[b] || 0) + 1;
                        return acc;
                      },
                      {} as Record<string, number>,
                    ),
                  )
                    .map(([name, value]) => ({ name, value }))
                    .sort((a, b) => b.value - a.value)
                    .slice(0, 5)}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${((percent || 0) * 100).toFixed(0)}%`
                  }
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Col>

        <Col lg={6} md={12}>
          <ChartWrapper>
            <h4 className="mb-4 text-center">Top Operating Systems</h4>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  data={Object.entries(
                    data.reduce(
                      (acc, curr) => {
                        const os = curr.os || "Unknown";
                        acc[os] = (acc[os] || 0) + 1;
                        return acc;
                      },
                      {} as Record<string, number>,
                    ),
                  )
                    .map(([name, value]) => ({ name, value }))
                    .sort((a, b) => b.value - a.value)
                    .slice(0, 5)}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${((percent || 0) * 100).toFixed(0)}%`
                  }
                >
                  {COLORS.reverse().map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Col>
      </Row>
    </DashboardContainer>
  );
}
