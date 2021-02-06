import { useOnlineNotifier } from '../hooks/useOnlineNotifier'
import { Notification } from '../styles/Notification'

export const OfflineNotification = () => {
    const { isOnline } = useOnlineNotifier();

    if (isOnline) {
        return null;
    }

    return (
        <Notification>
            You are currently offline.
        </Notification>
    )
}