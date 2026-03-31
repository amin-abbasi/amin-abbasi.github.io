export interface Point3D {
    x: number;
    y: number;
    z: number;
}

export type Connection = [number, number];

export interface Mesh3D {
    vertices: Point3D[];
    connections: Connection[];
}

const CharMeshes: Record<string, Mesh3D> = {
    'A': {
        vertices: [
            { x: -22, y: 40, z: 0 }, { x: 0, y: -40, z: 0 }, { x: 22, y: 40, z: 0 }, // triangle frame
            { x: -14, y: 15, z: 0 }, { x: 14, y: 15, z: 0 } // bridge
        ],
        connections: [[0, 1], [1, 2], [3, 4]]
    },
    'B': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: -20, y: 40, z: 0 }, // stem
            { x: -20, y: -40, z: 0 }, { x: 10, y: -40, z: 0 }, { x: 22, y: -20, z: 0 }, { x: 10, y: 0, z: 0 }, // top bubble
            { x: -20, y: 0, z: 0 }, { x: 22, y: 20, z: 0 }, { x: 10, y: 40, z: 0 }, { x: -20, y: 40, z: 0 } // bottom bubble
        ],
        connections: [[0, 1], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]]
    },
    'C': {
        vertices: [
            { x: 20, y: -30, z: 0 }, { x: 5, y: -40, z: 0 }, { x: -20, y: -20, z: 0 }, 
            { x: -20, y: 20, z: 0 }, { x: 5, y: 40, z: 0 }, { x: 20, y: 30, z: 0 }
        ],
        connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
    },
    'D': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: -20, y: 40, z: 0 }, // stem
            { x: -20, y: -40, z: 0 }, { x: 10, y: -40, z: 0 }, { x: 22, y: 0, z: 0 }, { x: 10, y: 40, z: 0 }, { x: -20, y: 40, z: 0 }
        ],
        connections: [[0, 1], [2, 3], [3, 4], [4, 5], [5, 6]]
    },
    'E': {
        vertices: [
            { x: 20, y: -40, z: 0 }, { x: -20, y: -40, z: 0 }, { x: -20, y: 40, z: 0 }, { x: 20, y: 40, z: 0 }, // frame
            { x: -20, y: 0, z: 0 }, { x: 10, y: 0, z: 0 } // mid
        ],
        connections: [[0, 1], [1, 2], [2, 3], [4, 5]]
    },
    'F': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: -20, y: 40, z: 0 }, // stem
            { x: -20, y: -40, z: 0 }, { x: 20, y: -40, z: 0 }, // top
            { x: -20, y: 0, z: 0 }, { x: 10, y: 0, z: 0 }    // mid
        ],
        connections: [[0, 1], [1, 3], [4, 5]]
    },
    'G': {
        vertices: [
            { x: 22, y: -20, z: 0 }, { x: 5, y: -40, z: 0 }, { x: -20, y: -20, z: 0 }, 
            { x: -20, y: 20, z: 0 }, { x: 5, y: 40, z: 0 }, { x: 22, y: 20, z: 0 },
            { x: 22, y: 5, z: 0 }, { x: 8, y: 5, z: 0 }
        ],
        connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
    },
    'H': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: -20, y: 40, z: 0 }, // left
            { x: 20, y: -40, z: 0 }, { x: 20, y: 40, z: 0 },   // right
            { x: -20, y: 0, z: 0 }, { x: 20, y: 0, z: 0 }      // bridge
        ],
        connections: [[0, 1], [2, 3], [4, 5]]
    },
    'I': {
        vertices: [
            { x: 0, y: -40, z: 0 }, { x: 0, y: 40, z: 0 },     // stem
            { x: -15, y: -40, z: 0 }, { x: 15, y: -40, z: 0 }, // top
            { x: -15, y: 40, z: 0 }, { x: 15, y: 40, z: 0 }    // bottom
        ],
        connections: [[0, 1], [2, 3], [4, 5]]
    },
    'J': {
        vertices: [
            { x: 15, y: -40, z: 0 }, { x: 15, y: 25, z: 0 }, 
            { x: 0, y: 40, z: 0 }, { x: -15, y: 25, z: 0 }
        ],
        connections: [[0, 1], [1, 2], [2, 3]]
    },
    'K': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: -20, y: 40, z: 0 }, // stem
            { x: -20, y: 0, z: 0 }, { x: 20, y: -40, z: 0 },   // kick top
            { x: -20, y: 0, z: 0 }, { x: 20, y: 40, z: 0 }     // kick bottom
        ],
        connections: [[0, 1], [2, 3], [4, 5]]
    },
    'L': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: -20, y: 40, z: 0 },
            { x: -20, y: 40, z: 0 }, { x: 20, y: 40, z: 0 }
        ],
        connections: [[0, 1], [2, 3]]
    },
    'M': {
        vertices: [
            { x: -22, y: 40, z: 0 }, { x: -22, y: -40, z: 0 }, 
            { x: -22, y: -40, z: 0 }, { x: 0, y: 0, z: 0 }, 
            { x: 0, y: 0, z: 0 }, { x: 22, y: -40, z: 0 }, 
            { x: 22, y: -40, z: 0 }, { x: 22, y: 40, z: 0 }
        ],
        connections: [[0, 1], [2, 3], [4, 5], [6, 7]]
    },
    'N': {
        vertices: [
            { x: -20, y: 40, z: 0 }, { x: -20, y: -40, z: 0 },
            { x: -20, y: -40, z: 0 }, { x: 20, y: 40, z: 0 },
            { x: 20, y: 40, z: 0 }, { x: 20, y: -40, z: 0 }
        ],
        connections: [[0, 1], [2, 3], [4, 5]]
    },
    'O': {
        vertices: [
            { x: -20, y: -20, z: 0 }, { x: -5, y: -40, z: 0 }, { x: 5, y: -40, z: 0 }, { x: 20, y: -20, z: 0 },
            { x: 20, y: 20, z: 0 }, { x: 5, y: 40, z: 0 }, { x: -5, y: 40, z: 0 }, { x: -20, y: 20, z: 0 }
        ],
        connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0]]
    },
    'P': {
        vertices: [
            { x: -20, y: 40, z: 0 }, { x: -20, y: -40, z: 0 },
            { x: -20, y: -40, z: 0 }, { x: 10, y: -40, z: 0 }, { x: 22, y: -20, z: 0 }, { x: 10, y: 0, z: 0 }, { x: -20, y: 0, z: 0 }
        ],
        connections: [[0, 1], [2, 3], [3, 4], [4, 5], [5, 6]]
    },
    'Q': {
        vertices: [
            { x: -20, y: -20, z: 0 }, { x: -5, y: -40, z: 0 }, { x: 5, y: -40, z: 0 }, { x: 20, y: -20, z: 0 },
            { x: 20, y: 15, z: 0 }, { x: 5, y: 35, z: 0 }, { x: -5, y: 35, z: 0 }, { x: -20, y: 15, z: 0 },
            { x: 5, y: 15, z: 0 }, { x: 22, y: 40, z: 0 }
        ],
        connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0], [8, 9]]
    },
    'R': {
        vertices: [
            { x: -20, y: 40, z: 0 }, { x: -20, y: -40, z: 0 },
            { x: -20, y: -40, z: 0 }, { x: 10, y: -40, z: 0 }, { x: 22, y: -20, z: 0 }, { x: 10, y: 0, z: 0 }, { x: -20, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 }, { x: 22, y: 40, z: 0 }
        ],
        connections: [[0, 1], [2, 3], [3, 4], [4, 5], [5, 6], [7, 8]]
    },
    'S': {
        vertices: [
            { x: 20, y: -25, z: 0 }, { x: 5, y: -40, z: 0 }, { x: -20, y: -25, z: 0 }, 
            { x: -20, y: -10, z: 0 }, { x: 20, y: 10, z: 0 }, { x: 20, y: 25, z: 0 }, 
            { x: 5, y: 40, z: 0 }, { x: -20, y: 25, z: 0 }
        ],
        connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
    },
    'T': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: 20, y: -40, z: 0 },
            { x: 0, y: -40, z: 0 }, { x: 0, y: 40, z: 0 }
        ],
        connections: [[0, 1], [2, 3]]
    },
    'U': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: -20, y: 20, z: 0 },
            { x: -20, y: 20, z: 0 }, { x: 0, y: 40, z: 0 },
            { x: 0, y: 40, z: 0 }, { x: 20, y: 20, z: 0 },
            { x: 20, y: 20, z: 0 }, { x: 20, y: -40, z: 0 }
        ],
        connections: [[0, 1], [2, 3], [4, 5], [6, 7]]
    },
    'V': {
        vertices: [
            { x: -22, y: -40, z: 0 }, { x: 0, y: 40, z: 0 },
            { x: 0, y: 40, z: 0 }, { x: 22, y: -40, z: 0 }
        ],
        connections: [[0, 1], [2, 3]]
    },
    'W': {
        vertices: [
            { x: -22, y: -40, z: 0 }, { x: -12, y: 40, z: 0 },
            { x: -12, y: 40, z: 0 }, { x: 0, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 }, { x: 12, y: 40, z: 0 },
            { x: 12, y: 40, z: 0 }, { x: 22, y: -40, z: 0 }
        ],
        connections: [[0, 1], [2, 3], [4, 5], [6, 7]]
    },
    'X': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: 20, y: 40, z: 0 },
            { x: 20, y: -40, z: 0 }, { x: -20, y: 40, z: 0 }
        ],
        connections: [[0, 1], [2, 3]]
    },
    'Y': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: 0, y: 0, z: 0 },
            { x: 20, y: -40, z: 0 }, { x: 0, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 }, { x: 0, y: 40, z: 0 }
        ],
        connections: [[0, 1], [2, 3], [4, 5]]
    },
    'Z': {
        vertices: [
            { x: -20, y: -40, z: 0 }, { x: 20, y: -40, z: 0 },
            { x: 20, y: -40, z: 0 }, { x: -20, y: 40, z: 0 },
            { x: -20, y: 40, z: 0 }, { x: 20, y: 40, z: 0 }
        ],
        connections: [[0, 1], [2, 3], [4, 5]]
    }
};

// Fallback for missing characters
const FALLBACK_MESH: Mesh3D = {
    vertices: [{ x: -10, y: -40, z: 0 }, { x: 10, y: -40, z: 0 }, { x: 10, y: 40, z: 0 }, { x: -10, y: 40, z: 0 }],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
};

export function getMeshForString(text: string): Mesh3D {
    const chars = text.toUpperCase().split('');
    const allVertices: Point3D[] = [];
    const allConnections: Connection[] = [];
    
    let currentXOffset = 0;
    const spacing = 60;

    chars.forEach((char) => {
        const mesh = CharMeshes[char] || FALLBACK_MESH;
        const vertexOffset = allVertices.length;
        
        // Add vertices with offset
        mesh.vertices.forEach(v => {
            allVertices.push({ x: v.x + currentXOffset, y: v.y, z: v.z });
        });
        
        // Add connections with index adjustment
        mesh.connections.forEach(c => {
            allConnections.push([c[0] + vertexOffset, c[1] + vertexOffset]);
        });
        
        currentXOffset += spacing;
    });

    // Center the whole mesh
    const totalWidth = currentXOffset - spacing;
    allVertices.forEach(v => {
        v.x -= totalWidth / 2;
    });

    return { vertices: allVertices, connections: allConnections };
}
