import { keyboard, Key } from '@nut-tree-fork/nut-js';


async function pressComboKeys(...keys) {
    await keyboard.pressKey(...keys);
    await keyboard.releaseKey(...keys);
}

const copyKey = process.platform === 'darwin' ? Key.LeftSuper : Key.LeftControl;

(async () => {
    await keyboard.type("Hello from ESM !");
    await pressComboKeys(copyKey, Key.A);
    await pressComboKeys(copyKey, Key.C);
    await pressComboKeys(copyKey, Key.V);
})();