import { member, Member, Component } from "../../core";
    
    export interface ModelImportDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
swapPanel?: member<any>;
path?: member<any>;
_scale?: member<number>;
_autoScale?: member<boolean>;
_material?: member<any>;
_preferSpecular?: member<boolean>;
_rig?: member<boolean>;
_setupIK?: member<boolean>;
_debugRig?: member<boolean>;
_colliders?: member<boolean>;
_animations?: member<boolean>;
_snappable?: member<boolean>;
_timelapse?: member<boolean>;
_externalTextures?: member<boolean>;
_grabbable?: member<boolean>;
_scalable?: member<boolean>;
_importAtOrigin?: member<boolean>;
_forceTpose?: member<boolean>;
_assetsOnObject?: member<boolean>;
_asPointCloud?: member<boolean>;
_importImagesByName?: member<boolean>;
_importImageAlignment?: member<any>;
_calculateNormals?: member<boolean>;
_calculateTangents?: member<boolean>;
_calculateTextureAlpha?: member<boolean>;
_importVertexColors?: member<boolean>;
_importAlbedoColor?: member<boolean>;
_importEmissive?: member<boolean>;
_importBones?: member<boolean>;
_importLights?: member<boolean>;
_makeDualSided?: member<boolean>;
_makeFlatShaded?: member<boolean>;
_deduplicateInstances?: member<boolean>;
_optimizeModel?: member<boolean>;
_splitSubmeshes?: member<boolean>;
_generateRandomColors?: member<boolean>;
_spawnMaterialOrbs?: member<boolean>;
_maxTextureSize?: member<number>;
_textureConversion?: member<any>;
_forcePointFiltering?: member<boolean>;
_forceNoMipMaps?: member<boolean>;
_forceUncompressed?: member<boolean>;
ForceAsPointCloud?: member<boolean>;
    }
    
    export function ModelImportDialog(props: ModelImportDialogInput){
      const { id, persistentId, updateOrder, Enabled,
swapPanel,
path,
_scale,
_autoScale,
_material,
_preferSpecular,
_rig,
_setupIK,
_debugRig,
_colliders,
_animations,
_snappable,
_timelapse,
_externalTextures,
_grabbable,
_scalable,
_importAtOrigin,
_forceTpose,
_assetsOnObject,
_asPointCloud,
_importImagesByName,
_importImageAlignment,
_calculateNormals,
_calculateTangents,
_calculateTextureAlpha,
_importVertexColors,
_importAlbedoColor,
_importEmissive,
_importBones,
_importLights,
_makeDualSided,
_makeFlatShaded,
_deduplicateInstances,
_optimizeModel,
_splitSubmeshes,
_generateRandomColors,
_spawnMaterialOrbs,
_maxTextureSize,
_textureConversion,
_forcePointFiltering,
_forceNoMipMaps,
_forceUncompressed,
ForceAsPointCloud, } = props;
    
      return (
        <Component type="FrooxEngine.ModelImportDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSwapCanvasPanel]`} name="swapPanel" id={typeof swapPanel === "object" && "id" in swapPanel ? swapPanel?.id : undefined} value={typeof swapPanel === "object" && "value" in swapPanel ? swapPanel?.value : swapPanel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncDelegateList\`1[System.Action\`1[FrooxEngine.UIX.UIBuilder]]`} name="path" id={typeof path === "object" && "id" in path ? path?.id : undefined} value={typeof path === "object" && "value" in path ? path?.value : path} /* default: FrooxEngine.SyncDelegateList`1[System.Action`1[FrooxEngine.UIX.UIBuilder]] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_autoScale" id={typeof _autoScale === "object" && "id" in _autoScale ? _autoScale?.id : undefined} value={typeof _autoScale === "object" && "value" in _autoScale ? _autoScale?.value : _autoScale} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ModelImportDialog+MaterialType]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: PBS */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_preferSpecular" id={typeof _preferSpecular === "object" && "id" in _preferSpecular ? _preferSpecular?.id : undefined} value={typeof _preferSpecular === "object" && "value" in _preferSpecular ? _preferSpecular?.value : _preferSpecular} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_rig" id={typeof _rig === "object" && "id" in _rig ? _rig?.id : undefined} value={typeof _rig === "object" && "value" in _rig ? _rig?.value : _rig} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_setupIK" id={typeof _setupIK === "object" && "id" in _setupIK ? _setupIK?.id : undefined} value={typeof _setupIK === "object" && "value" in _setupIK ? _setupIK?.value : _setupIK} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_debugRig" id={typeof _debugRig === "object" && "id" in _debugRig ? _debugRig?.id : undefined} value={typeof _debugRig === "object" && "value" in _debugRig ? _debugRig?.value : _debugRig} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_colliders" id={typeof _colliders === "object" && "id" in _colliders ? _colliders?.id : undefined} value={typeof _colliders === "object" && "value" in _colliders ? _colliders?.value : _colliders} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_animations" id={typeof _animations === "object" && "id" in _animations ? _animations?.id : undefined} value={typeof _animations === "object" && "value" in _animations ? _animations?.value : _animations} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_snappable" id={typeof _snappable === "object" && "id" in _snappable ? _snappable?.id : undefined} value={typeof _snappable === "object" && "value" in _snappable ? _snappable?.value : _snappable} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_timelapse" id={typeof _timelapse === "object" && "id" in _timelapse ? _timelapse?.id : undefined} value={typeof _timelapse === "object" && "value" in _timelapse ? _timelapse?.value : _timelapse} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_externalTextures" id={typeof _externalTextures === "object" && "id" in _externalTextures ? _externalTextures?.id : undefined} value={typeof _externalTextures === "object" && "value" in _externalTextures ? _externalTextures?.value : _externalTextures} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_grabbable" id={typeof _grabbable === "object" && "id" in _grabbable ? _grabbable?.id : undefined} value={typeof _grabbable === "object" && "value" in _grabbable ? _grabbable?.value : _grabbable} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_scalable" id={typeof _scalable === "object" && "id" in _scalable ? _scalable?.id : undefined} value={typeof _scalable === "object" && "value" in _scalable ? _scalable?.value : _scalable} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_importAtOrigin" id={typeof _importAtOrigin === "object" && "id" in _importAtOrigin ? _importAtOrigin?.id : undefined} value={typeof _importAtOrigin === "object" && "value" in _importAtOrigin ? _importAtOrigin?.value : _importAtOrigin} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_forceTpose" id={typeof _forceTpose === "object" && "id" in _forceTpose ? _forceTpose?.id : undefined} value={typeof _forceTpose === "object" && "value" in _forceTpose ? _forceTpose?.value : _forceTpose} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_assetsOnObject" id={typeof _assetsOnObject === "object" && "id" in _assetsOnObject ? _assetsOnObject?.id : undefined} value={typeof _assetsOnObject === "object" && "value" in _assetsOnObject ? _assetsOnObject?.value : _assetsOnObject} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_asPointCloud" id={typeof _asPointCloud === "object" && "id" in _asPointCloud ? _asPointCloud?.id : undefined} value={typeof _asPointCloud === "object" && "value" in _asPointCloud ? _asPointCloud?.value : _asPointCloud} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_importImagesByName" id={typeof _importImagesByName === "object" && "id" in _importImagesByName ? _importImagesByName?.id : undefined} value={typeof _importImagesByName === "object" && "value" in _importImagesByName ? _importImagesByName?.value : _importImagesByName} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ModelImportDialog+AlignmentAxis]`} name="_importImageAlignment" id={typeof _importImageAlignment === "object" && "id" in _importImageAlignment ? _importImageAlignment?.id : undefined} value={typeof _importImageAlignment === "object" && "value" in _importImageAlignment ? _importImageAlignment?.value : _importImageAlignment} /* default: PosX */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_calculateNormals" id={typeof _calculateNormals === "object" && "id" in _calculateNormals ? _calculateNormals?.id : undefined} value={typeof _calculateNormals === "object" && "value" in _calculateNormals ? _calculateNormals?.value : _calculateNormals} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_calculateTangents" id={typeof _calculateTangents === "object" && "id" in _calculateTangents ? _calculateTangents?.id : undefined} value={typeof _calculateTangents === "object" && "value" in _calculateTangents ? _calculateTangents?.value : _calculateTangents} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_calculateTextureAlpha" id={typeof _calculateTextureAlpha === "object" && "id" in _calculateTextureAlpha ? _calculateTextureAlpha?.id : undefined} value={typeof _calculateTextureAlpha === "object" && "value" in _calculateTextureAlpha ? _calculateTextureAlpha?.value : _calculateTextureAlpha} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_importVertexColors" id={typeof _importVertexColors === "object" && "id" in _importVertexColors ? _importVertexColors?.id : undefined} value={typeof _importVertexColors === "object" && "value" in _importVertexColors ? _importVertexColors?.value : _importVertexColors} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_importAlbedoColor" id={typeof _importAlbedoColor === "object" && "id" in _importAlbedoColor ? _importAlbedoColor?.id : undefined} value={typeof _importAlbedoColor === "object" && "value" in _importAlbedoColor ? _importAlbedoColor?.value : _importAlbedoColor} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_importEmissive" id={typeof _importEmissive === "object" && "id" in _importEmissive ? _importEmissive?.id : undefined} value={typeof _importEmissive === "object" && "value" in _importEmissive ? _importEmissive?.value : _importEmissive} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_importBones" id={typeof _importBones === "object" && "id" in _importBones ? _importBones?.id : undefined} value={typeof _importBones === "object" && "value" in _importBones ? _importBones?.value : _importBones} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_importLights" id={typeof _importLights === "object" && "id" in _importLights ? _importLights?.id : undefined} value={typeof _importLights === "object" && "value" in _importLights ? _importLights?.value : _importLights} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_makeDualSided" id={typeof _makeDualSided === "object" && "id" in _makeDualSided ? _makeDualSided?.id : undefined} value={typeof _makeDualSided === "object" && "value" in _makeDualSided ? _makeDualSided?.value : _makeDualSided} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_makeFlatShaded" id={typeof _makeFlatShaded === "object" && "id" in _makeFlatShaded ? _makeFlatShaded?.id : undefined} value={typeof _makeFlatShaded === "object" && "value" in _makeFlatShaded ? _makeFlatShaded?.value : _makeFlatShaded} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_deduplicateInstances" id={typeof _deduplicateInstances === "object" && "id" in _deduplicateInstances ? _deduplicateInstances?.id : undefined} value={typeof _deduplicateInstances === "object" && "value" in _deduplicateInstances ? _deduplicateInstances?.value : _deduplicateInstances} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_optimizeModel" id={typeof _optimizeModel === "object" && "id" in _optimizeModel ? _optimizeModel?.id : undefined} value={typeof _optimizeModel === "object" && "value" in _optimizeModel ? _optimizeModel?.value : _optimizeModel} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_splitSubmeshes" id={typeof _splitSubmeshes === "object" && "id" in _splitSubmeshes ? _splitSubmeshes?.id : undefined} value={typeof _splitSubmeshes === "object" && "value" in _splitSubmeshes ? _splitSubmeshes?.value : _splitSubmeshes} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_generateRandomColors" id={typeof _generateRandomColors === "object" && "id" in _generateRandomColors ? _generateRandomColors?.id : undefined} value={typeof _generateRandomColors === "object" && "value" in _generateRandomColors ? _generateRandomColors?.value : _generateRandomColors} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_spawnMaterialOrbs" id={typeof _spawnMaterialOrbs === "object" && "id" in _spawnMaterialOrbs ? _spawnMaterialOrbs?.id : undefined} value={typeof _spawnMaterialOrbs === "object" && "value" in _spawnMaterialOrbs ? _spawnMaterialOrbs?.value : _spawnMaterialOrbs} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_maxTextureSize" id={typeof _maxTextureSize === "object" && "id" in _maxTextureSize ? _maxTextureSize?.id : undefined} value={typeof _maxTextureSize === "object" && "value" in _maxTextureSize ? _maxTextureSize?.value : _maxTextureSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureConversion]`} name="_textureConversion" id={typeof _textureConversion === "object" && "id" in _textureConversion ? _textureConversion?.id : undefined} value={typeof _textureConversion === "object" && "value" in _textureConversion ? _textureConversion?.value : _textureConversion} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_forcePointFiltering" id={typeof _forcePointFiltering === "object" && "id" in _forcePointFiltering ? _forcePointFiltering?.id : undefined} value={typeof _forcePointFiltering === "object" && "value" in _forcePointFiltering ? _forcePointFiltering?.value : _forcePointFiltering} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_forceNoMipMaps" id={typeof _forceNoMipMaps === "object" && "id" in _forceNoMipMaps ? _forceNoMipMaps?.id : undefined} value={typeof _forceNoMipMaps === "object" && "value" in _forceNoMipMaps ? _forceNoMipMaps?.value : _forceNoMipMaps} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_forceUncompressed" id={typeof _forceUncompressed === "object" && "id" in _forceUncompressed ? _forceUncompressed?.id : undefined} value={typeof _forceUncompressed === "object" && "value" in _forceUncompressed ? _forceUncompressed?.value : _forceUncompressed} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceAsPointCloud" id={typeof ForceAsPointCloud === "object" && "id" in ForceAsPointCloud ? ForceAsPointCloud?.id : undefined} value={typeof ForceAsPointCloud === "object" && "value" in ForceAsPointCloud ? ForceAsPointCloud?.value : ForceAsPointCloud} /* default: false */  />
        </Component>
      );
    };
    