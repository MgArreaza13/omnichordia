export interface DatabaseConfig {
	type: string;
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
	synchronize?: boolean;
	logging?: boolean;
	entities?: string[];
}
