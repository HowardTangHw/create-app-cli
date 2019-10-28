'use strict';

const chalk = require('chalk');
const commander = require('commander');
const dns = require('dns');
const envinfo = require('envinfo');
const execSync = require('child_process').execSync;
const fs = require('fs-extra');
const hyperquest = require('hyperquest');
const inquirer = require('inquirer');
const os = require('os');
const path = require('path');
const semver = require('semver');
const spawn = require('cross-spawn');
const tmp = require('tmp');
const unpack = require('tar-pack').unpack;
const url = require('url');
const validateProjectName = require('validate-npm-package-name');
const util = require('./util/fileDisplay');
async function create() {
    let foloderList = await util.fileDisplay('./template');
    let type, template;
    type = await inquirer.prompt([
        {
            type: 'list',
            name: 'FrameWork',
            message: 'What do you want to do?',
            choices: foloderList[0]
        }
    ]);
    template = await inquirer.prompt([
        {
            type: 'list',
            name: 'version',
            message: `${type['FrameWork']} version`,
            choices: foloderList[1][type['FrameWork']]
        }
    ]);

    // TODO: input files name

    // TODO: COPY FILES

    // TODO: change floder name
}
create();
