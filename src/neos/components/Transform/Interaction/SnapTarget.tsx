import { member, Member, Component } from "../../../core";
    
    export interface SnapTargetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SnapperWhitelist?: member<any>;
SnapperKeywordWhitelist?: member<any>;
Filters?: member<any>;
DirectSnapOnly?: member<boolean>;
MaximumSnapDistance?: member<number>;
MaximumAngleDeviation?: member<number>;
AnimationTime?: member<number>;
AutoSnap?: member<boolean>;
_snapColliderRadius?: member<any>;
proxySphere?: member<any>;
    }
    
    export function SnapTarget(props: SnapTargetInput){
      const { id, persistentId, updateOrder, Enabled,
SnapperWhitelist,
SnapperKeywordWhitelist,
Filters,
DirectSnapOnly,
MaximumSnapDistance,
MaximumAngleDeviation,
AnimationTime,
AutoSnap,
_snapColliderRadius,
proxySphere, } = props;
    
      return (
        <Component type="FrooxEngine.SnapTarget" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Snapper]`} name="SnapperWhitelist" id={typeof SnapperWhitelist === "object" && "id" in SnapperWhitelist ? SnapperWhitelist?.id : undefined} value={typeof SnapperWhitelist === "object" && "value" in SnapperWhitelist ? SnapperWhitelist?.value : SnapperWhitelist} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Snapper] */  isRaw={typeof SnapperWhitelist === "object" && "isRaw" in SnapperWhitelist && SnapperWhitelist.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="SnapperKeywordWhitelist" id={typeof SnapperKeywordWhitelist === "object" && "id" in SnapperKeywordWhitelist ? SnapperKeywordWhitelist?.id : undefined} value={typeof SnapperKeywordWhitelist === "object" && "value" in SnapperKeywordWhitelist ? SnapperKeywordWhitelist?.value : SnapperKeywordWhitelist} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof SnapperKeywordWhitelist === "object" && "isRaw" in SnapperKeywordWhitelist && SnapperKeywordWhitelist.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegateList\`1[FrooxEngine.SnapperFilter]`} name="Filters" id={typeof Filters === "object" && "id" in Filters ? Filters?.id : undefined} value={typeof Filters === "object" && "value" in Filters ? Filters?.value : Filters} /* default: FrooxEngine.SyncDelegateList`1[FrooxEngine.SnapperFilter] */  isRaw={typeof Filters === "object" && "isRaw" in Filters && Filters.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DirectSnapOnly" id={typeof DirectSnapOnly === "object" && "id" in DirectSnapOnly ? DirectSnapOnly?.id : undefined} value={typeof DirectSnapOnly === "object" && "value" in DirectSnapOnly ? DirectSnapOnly?.value : DirectSnapOnly} /* default: false */  isRaw={typeof DirectSnapOnly === "object" && "isRaw" in DirectSnapOnly && DirectSnapOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaximumSnapDistance" id={typeof MaximumSnapDistance === "object" && "id" in MaximumSnapDistance ? MaximumSnapDistance?.id : undefined} value={typeof MaximumSnapDistance === "object" && "value" in MaximumSnapDistance ? MaximumSnapDistance?.value : MaximumSnapDistance} /* default: 0 */  isRaw={typeof MaximumSnapDistance === "object" && "isRaw" in MaximumSnapDistance && MaximumSnapDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaximumAngleDeviation" id={typeof MaximumAngleDeviation === "object" && "id" in MaximumAngleDeviation ? MaximumAngleDeviation?.id : undefined} value={typeof MaximumAngleDeviation === "object" && "value" in MaximumAngleDeviation ? MaximumAngleDeviation?.value : MaximumAngleDeviation} /* default: 0 */  isRaw={typeof MaximumAngleDeviation === "object" && "isRaw" in MaximumAngleDeviation && MaximumAngleDeviation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnimationTime" id={typeof AnimationTime === "object" && "id" in AnimationTime ? AnimationTime?.id : undefined} value={typeof AnimationTime === "object" && "value" in AnimationTime ? AnimationTime?.value : AnimationTime} /* default: 0 */  isRaw={typeof AnimationTime === "object" && "isRaw" in AnimationTime && AnimationTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoSnap" id={typeof AutoSnap === "object" && "id" in AutoSnap ? AutoSnap?.id : undefined} value={typeof AutoSnap === "object" && "value" in AutoSnap ? AutoSnap?.value : AutoSnap} /* default: false */  isRaw={typeof AutoSnap === "object" && "isRaw" in AutoSnap && AutoSnap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_snapColliderRadius" id={typeof _snapColliderRadius === "object" && "id" in _snapColliderRadius ? _snapColliderRadius?.id : undefined} value={typeof _snapColliderRadius === "object" && "value" in _snapColliderRadius ? _snapColliderRadius?.value : _snapColliderRadius} /* default: ID0 */  isRaw={typeof _snapColliderRadius === "object" && "isRaw" in _snapColliderRadius && _snapColliderRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SphereCollider]`} name="proxySphere" id={typeof proxySphere === "object" && "id" in proxySphere ? proxySphere?.id : undefined} value={typeof proxySphere === "object" && "value" in proxySphere ? proxySphere?.value : proxySphere} /* default: ID0 */  isRaw={typeof proxySphere === "object" && "isRaw" in proxySphere && proxySphere.isRaw ? true : undefined} />
        </Component>
      );
    };
    