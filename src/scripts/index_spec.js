import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('The index script', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('The index html file', () => {
    it('should say have the correct greeting', (done) => {
        const index = fs.readFileSync("./src/index.html", "utf-8");

        jsdom.env(index, (err, window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];

            expect(h1.innerHTML).to.equal("Welcome to Eight!");
            done();
            window.close();
        });
    });
});