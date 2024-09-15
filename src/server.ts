import { App } from '@/app';
import { IndexRoute } from '@routes/index.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new IndexRoute()]);

app.listen();
