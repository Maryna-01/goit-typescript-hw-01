// Імпортуємо перелік UserRole, якщо він визначений в іншому файлі
export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}

// Імпортів для Record не потрібно, оскільки це вбудований тип TypeScript
const RoleDescription: Record<UserRole, string> = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
};
