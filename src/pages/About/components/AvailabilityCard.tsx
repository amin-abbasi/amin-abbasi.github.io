import { Availability } from '@core/types/resume';
import * as S from './AvailabilityCard.styles';

interface AvailabilityCardProps {
    availability: Availability;
}

function AvailabilityCard({ availability }: AvailabilityCardProps) {
    if (!availability) return null;

    return (
        <S.Card>
            <S.PulseDot />
            <S.AvailText>
                <strong>{availability.status}</strong>
                <span>
                    {availability.location} &middot; {availability.timezone}
                    {availability.remote && ' \u00B7 Remote OK'}
                </span>
            </S.AvailText>
        </S.Card>
    );
}

export default AvailabilityCard;
