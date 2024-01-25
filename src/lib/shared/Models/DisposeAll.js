import {disposeScene} from "$lib/shared/Models/SupernovaModel.js";
import {disposeSceneNebula} from "$lib/shared/Models/NebulaModel.js";
import {disposeStar} from "$lib/shared/Models/StarModel.js";
import {disposeExplosionScene} from "$lib/shared/Models/ExplodingSphereModel.js";

export async function disposeAllModels() {
    await disposeScene();
    await disposeSceneNebula();
    await disposeStar();
    await disposeExplosionScene();
}
