const session = require('smartux-connect');
session.transform.notemptyrepofore2e_2 = session.loadTransform('notemptyrepofore2e_2');
require('./client');
require('./transform/notemptyrepofore2e_2');
session.start();