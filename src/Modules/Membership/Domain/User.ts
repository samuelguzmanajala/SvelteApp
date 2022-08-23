export interface User{
    id: string;
    name: string;
    mail: string;
    password: string;
}
export const userEmptyState: User = {
    id: '',
    name: '',
    mail: '',
    password: ''
}