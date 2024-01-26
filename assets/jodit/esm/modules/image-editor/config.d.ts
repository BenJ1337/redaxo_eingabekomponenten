/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2024 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * @module modules/image-editor
 */
import type { ImageEditorOptions } from "jodit/esm/types";
declare module 'jodit/config' {
    interface Config {
        imageeditor: ImageEditorOptions;
    }
}
