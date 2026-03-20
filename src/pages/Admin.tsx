import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import Dashboard from '../components/admin/Dashboard';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';

const ADMIN_HASH = '$2b$10$4QoV.FxH11vPy92U0hcZXOuzSjpeK0C.J7whXDpKw1z590CUZFWdq';

const LoginPage = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const LoginCard = styled(Card)`
    background: ${(props) => props.theme.cardBackground};
    border: 1px solid ${(props) => props.theme.cardBorderColor};
    color: ${(props) => props.theme.color};
    padding: 3rem;
    width: 100%;
    max-width: 450px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    h2 {
        font-family: var(--font-mono);
        color: ${(props) => props.theme.accentColor};
        margin-bottom: 2rem;
        text-align: center;
    }
`;

const StyledInput = styled(Form.Control)`
    background: transparent;
    border: 1px solid ${(props) => props.theme.accentColor}55;
    color: ${(props) => props.theme.color};
    margin-bottom: 1.5rem;
    padding: 10px 15px;

    &:focus {
        background: transparent;
        border-color: ${(props) => props.theme.accentColor};
        color: ${(props) => props.theme.color};
        box-shadow: 0 0 0 0.25rem ${(props) => props.theme.accentColor}40;
    }
`;

const StyledButton = styled(Button)`
    width: 100%;
    padding: 10px;
    font-family: var(--font-mono);
    letter-spacing: 0.1em;
    font-weight: bold;
`;

export default function Admin() {
    const { t } = useTranslation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const match = bcrypt.compareSync(password, ADMIN_HASH);
            if (match) {
                setIsAuthenticated(true);
                setError('');
            } else {
                setError(t('layout:dashboard.login.invalidPassword', { defaultValue: 'Invalid password' }));
            }
        } catch (err) {
            console.error(err);
            setError(t('layout:dashboard.login.error', { defaultValue: 'Error verifying password' }));
        }
    };

    if (isAuthenticated) {
        return <Dashboard />;
    }

    return (
        <LoginPage>
            <LoginCard>
                <h2>{t('layout:dashboard.login.restrictedAccess', { defaultValue: 'RESTRICTED ACCESS' })}</h2>
                {error && <div className="alert alert-danger mb-4">{error}</div>}
                <Form onSubmit={handleLogin}>
                    <Form.Group>
                        <StyledInput
                            type="password"
                            placeholder={t('layout:dashboard.login.placeholder', { defaultValue: 'Enter Access Key' })}
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <StyledButton variant="outline-primary" type="submit">
                        {t('layout:dashboard.login.authenticate', { defaultValue: 'AUTHENTICATE' })}
                    </StyledButton>
                </Form>
            </LoginCard>
        </LoginPage>
    );
}
