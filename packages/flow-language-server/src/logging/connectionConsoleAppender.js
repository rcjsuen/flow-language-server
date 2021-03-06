/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import {IConnection} from 'vscode-languageserver';
// $FlowFixMe: type layouts
import {layouts} from 'log4js';

function appender(config: {connection: IConnection}) {
  const {connection} = config;

  // eslint-disable-next-line flowtype/no-weak-types
  return (loggingEvent: any): void => {
    connection.console.log(layouts.basicLayout(loggingEvent));
  };
}

module.exports.configure = module.exports.appender = appender;
