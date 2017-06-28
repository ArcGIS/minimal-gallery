/*
    Copyright 2017 Esri

    Licensed under the Apache License, Version 2.0 (the "License");

    you may not use this file except in compliance with the License.

    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software

    distributed under the License is distributed on an "AS IS" BASIS,

    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

    See the License for the specific language governing permissions and

    limitations under the License.​
*/

import ApplicationBase from "boilerplate/ApplicationBase";
import * as requireUtils from "esri/core/requireUtils";

import Main from "./widgets/Main";

export = (applicationConfigJSON, boilerplateConfigJSON) => {
    const boilerplate = new ApplicationBase({ config: JSON.parse(applicationConfigJSON), settings: JSON.parse(boilerplateConfigJSON) });
    requireUtils.when(require, ["dojo/i18n!config/nls/resources"]).then((i18n) => {
        const MainComponent = new Main({ boilerplate, i18n: i18n[0] });
        MainComponent.container = "viewDiv";
    });
};
