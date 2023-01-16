import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NeosHorizontalChoiceBarInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Style?: member<any>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
Width?: member<number>;
Height?: member<number>;
Thickness?: member<number>;
Spacing?: member<number>;
Slant?: member<number>;
Symmetrical?: member<boolean>;
SegmentTouched?: member<any>;
_root?: member<any>;
_rootScale?: member<any>;
    }
    
    export function NeosHorizontalChoiceBar(props: NeosHorizontalChoiceBarInput){
      const { id, persistentId, updateOrder, Enabled,
Style,
AcceptPhysicalTouch,
AcceptRemoteTouch,
Width,
Height,
Thickness,
Spacing,
Slant,
Symmetrical,
SegmentTouched,
_root,
_rootScale, } = props;
    
      return (
        <Component type="FrooxEngine.NeosHorizontalChoiceBar" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Spacing" id={typeof Spacing === "object" && "id" in Spacing ? Spacing?.id : undefined} value={typeof Spacing === "object" && "value" in Spacing ? Spacing?.value : Spacing} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Slant" id={typeof Slant === "object" && "id" in Slant ? Slant?.id : undefined} value={typeof Slant === "object" && "value" in Slant ? Slant?.value : Slant} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Symmetrical" id={typeof Symmetrical === "object" && "id" in Symmetrical ? Symmetrical?.id : undefined} value={typeof Symmetrical === "object" && "value" in Symmetrical ? Symmetrical?.value : Symmetrical} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.NeosHorizontalChoiceBar+SegmentTouchEvent]`} name="SegmentTouched" id={typeof SegmentTouched === "object" && "id" in SegmentTouched ? SegmentTouched?.id : undefined} value={typeof SegmentTouched === "object" && "value" in SegmentTouched ? SegmentTouched?.value : SegmentTouched} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_root" id={typeof _root === "object" && "id" in _root ? _root?.id : undefined} value={typeof _root === "object" && "value" in _root ? _root?.value : _root} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rootScale" id={typeof _rootScale === "object" && "id" in _rootScale ? _rootScale?.id : undefined} value={typeof _rootScale === "object" && "value" in _rootScale ? _rootScale?.value : _rootScale} /* default: ID0 */  />
        </Component>
      );
    };
    