import * as sinon from 'sinon';
import { afterEach } from 'mocha';
import * as fs from 'fs';

afterEach(() => {
	sinon.restore();
});
