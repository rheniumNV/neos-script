import { member, Member, Component } from "../../core";
    
    export interface NeosLogoMenuProgressInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
InnerBeginRadius?: member<number>;
InnerEndRadius?: member<number>;
ProgressTextSizeRatio?: member<number>;
DetailTextSizeRatio?: member<number>;
RotationSpeed?: member<number>;
_menu?: member<any>;
_progressText?: member<any>;
_detailText?: member<any>;
_itemOffsets?: member<any>;
    }
    
    export function NeosLogoMenuProgress(props: NeosLogoMenuProgressInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
InnerBeginRadius,
InnerEndRadius,
ProgressTextSizeRatio,
DetailTextSizeRatio,
RotationSpeed,
_menu,
_progressText,
_detailText,
_itemOffsets, } = props;
    
      return (
        <Component type="FrooxEngine.NeosLogoMenuProgress" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InnerBeginRadius" id={typeof InnerBeginRadius === "object" && "id" in InnerBeginRadius ? InnerBeginRadius?.id : undefined} value={typeof InnerBeginRadius === "object" && "value" in InnerBeginRadius ? InnerBeginRadius?.value : InnerBeginRadius} /* default: 0 */  isRaw={typeof InnerBeginRadius === "object" && "isRaw" in InnerBeginRadius && InnerBeginRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InnerEndRadius" id={typeof InnerEndRadius === "object" && "id" in InnerEndRadius ? InnerEndRadius?.id : undefined} value={typeof InnerEndRadius === "object" && "value" in InnerEndRadius ? InnerEndRadius?.value : InnerEndRadius} /* default: 0 */  isRaw={typeof InnerEndRadius === "object" && "isRaw" in InnerEndRadius && InnerEndRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ProgressTextSizeRatio" id={typeof ProgressTextSizeRatio === "object" && "id" in ProgressTextSizeRatio ? ProgressTextSizeRatio?.id : undefined} value={typeof ProgressTextSizeRatio === "object" && "value" in ProgressTextSizeRatio ? ProgressTextSizeRatio?.value : ProgressTextSizeRatio} /* default: 0 */  isRaw={typeof ProgressTextSizeRatio === "object" && "isRaw" in ProgressTextSizeRatio && ProgressTextSizeRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DetailTextSizeRatio" id={typeof DetailTextSizeRatio === "object" && "id" in DetailTextSizeRatio ? DetailTextSizeRatio?.id : undefined} value={typeof DetailTextSizeRatio === "object" && "value" in DetailTextSizeRatio ? DetailTextSizeRatio?.value : DetailTextSizeRatio} /* default: 0 */  isRaw={typeof DetailTextSizeRatio === "object" && "isRaw" in DetailTextSizeRatio && DetailTextSizeRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RotationSpeed" id={typeof RotationSpeed === "object" && "id" in RotationSpeed ? RotationSpeed?.id : undefined} value={typeof RotationSpeed === "object" && "value" in RotationSpeed ? RotationSpeed?.value : RotationSpeed} /* default: 0 */  isRaw={typeof RotationSpeed === "object" && "isRaw" in RotationSpeed && RotationSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController]`} name="_menu" id={typeof _menu === "object" && "id" in _menu ? _menu?.id : undefined} value={typeof _menu === "object" && "value" in _menu ? _menu?.value : _menu} /* default: ID0 */  isRaw={typeof _menu === "object" && "isRaw" in _menu && _menu.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_progressText" id={typeof _progressText === "object" && "id" in _progressText ? _progressText?.id : undefined} value={typeof _progressText === "object" && "value" in _progressText ? _progressText?.value : _progressText} /* default: ID0 */  isRaw={typeof _progressText === "object" && "isRaw" in _progressText && _progressText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_detailText" id={typeof _detailText === "object" && "id" in _detailText ? _detailText?.id : undefined} value={typeof _detailText === "object" && "value" in _detailText ? _detailText?.value : _detailText} /* default: ID0 */  isRaw={typeof _detailText === "object" && "isRaw" in _detailText && _detailText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[System.Single]]`} name="_itemOffsets" id={typeof _itemOffsets === "object" && "id" in _itemOffsets ? _itemOffsets?.id : undefined} value={typeof _itemOffsets === "object" && "value" in _itemOffsets ? _itemOffsets?.value : _itemOffsets} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[System.Single]] */  isRaw={typeof _itemOffsets === "object" && "isRaw" in _itemOffsets && _itemOffsets.isRaw ? true : undefined} />
        </Component>
      );
    };
    