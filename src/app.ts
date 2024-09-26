import { envs } from './core/config/env';
import { Server } from './server';

function main(): void {
	const server = new Server({
		port: envs.PORT
	});
	server.start();
}

main();
