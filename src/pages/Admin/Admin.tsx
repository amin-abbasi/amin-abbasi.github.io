// src/pages/Admin/Admin.tsx
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { useTranslation } from 'react-i18next';
import Dashboard from './components/Dashboard';
import * as S from './Admin.styles';

const ADMIN_HASH = '$2b$10$4QoV.FxH11vPy92U0hcZXOuzSjpeK0C.J7whXDpKw1z590CUZFWdq';

/**
 * Admin Page
 * Entry point for secure dashboard access.
 * Part of the Architectural Hardening initiative.
 */
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
        <S.LoginPage>
            <S.LoginCard>
                <h2>{t('layout:dashboard.login.restrictedAccess', { defaultValue: 'RESTRICTED ACCESS' })}</h2>
                {error && <S.ErrorAlert>{error}</S.ErrorAlert>}
                <form onSubmit={handleLogin}>
                    <S.StyledInput
                        type="password"
                        placeholder={t('layout:dashboard.login.placeholder', { defaultValue: 'Enter Access Key' })}
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        autoFocus
                    />
                    <S.StyledButton type="submit">
                        {t('layout:dashboard.login.authenticate', { defaultValue: 'AUTHENTICATE' })}
                    </S.StyledButton>
                </form>
            </S.LoginCard>
        </S.LoginPage>
    );
}
