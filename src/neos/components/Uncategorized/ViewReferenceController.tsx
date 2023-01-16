import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ViewReferenceControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PositionStream?: member<any>;
RotationStream?: member<any>;
ObjectSlot?: member<any>;
ShouldVoiceBeActive?: member<any>;
_objectSlotScale?: member<any>;
_objectSlotActive?: member<any>;
    }
    
    export function ViewReferenceController(props: ViewReferenceControllerInput){
      const { id, persistentId, updateOrder, Enabled,
PositionStream,
RotationStream,
ObjectSlot,
ShouldVoiceBeActive,
_objectSlotScale,
_objectSlotActive, } = props;
    
      return (
        <Component type="FrooxEngine.ViewReferenceController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float3]]`} name="PositionStream" id={typeof PositionStream === "object" && "id" in PositionStream ? PositionStream?.id : undefined} value={typeof PositionStream === "object" && "value" in PositionStream ? PositionStream?.value : PositionStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.floatQ]]`} name="RotationStream" id={typeof RotationStream === "object" && "id" in RotationStream ? RotationStream?.id : undefined} value={typeof RotationStream === "object" && "value" in RotationStream ? RotationStream?.value : RotationStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarObjectSlot]`} name="ObjectSlot" id={typeof ObjectSlot === "object" && "id" in ObjectSlot ? ObjectSlot?.id : undefined} value={typeof ObjectSlot === "object" && "value" in ObjectSlot ? ObjectSlot?.value : ObjectSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="ShouldVoiceBeActive" id={typeof ShouldVoiceBeActive === "object" && "id" in ShouldVoiceBeActive ? ShouldVoiceBeActive?.id : undefined} value={typeof ShouldVoiceBeActive === "object" && "value" in ShouldVoiceBeActive ? ShouldVoiceBeActive?.value : ShouldVoiceBeActive} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_objectSlotScale" id={typeof _objectSlotScale === "object" && "id" in _objectSlotScale ? _objectSlotScale?.id : undefined} value={typeof _objectSlotScale === "object" && "value" in _objectSlotScale ? _objectSlotScale?.value : _objectSlotScale} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_objectSlotActive" id={typeof _objectSlotActive === "object" && "id" in _objectSlotActive ? _objectSlotActive?.id : undefined} value={typeof _objectSlotActive === "object" && "value" in _objectSlotActive ? _objectSlotActive?.value : _objectSlotActive} /* default: ID0 */  />
        </Component>
      );
    };
    