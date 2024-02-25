/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2024 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Config } from "jodit/esm/config.js";
import { Icon } from "jodit/esm/core/ui/icon.js";
import searchIcon from "./search.svg.js";
import "./interface";
Config.prototype.useSearch = true;
Config.prototype.search = {
    lazyIdleTimeout: 0
};
Icon.set('search', searchIcon);
Config.prototype.controls.find = {
    tooltip: 'Find',
    icon: 'search',
    exec(jodit, _, { control }) {
        const value = control.args && control.args[0];
        switch (value) {
            case 'findPrevious':
                jodit.e.fire('searchPrevious');
                break;
            case 'findNext':
                jodit.e.fire('searchNext');
                break;
            case 'replace':
                jodit.execCommand('openReplaceDialog');
                break;
            default:
                jodit.execCommand('openSearchDialog');
        }
    },
    list: {
        search: 'Find',
        findNext: 'Find Next',
        findPrevious: 'Find Previous',
        replace: 'Replace'
    },
    childTemplate: (_, k, v) => v
};
