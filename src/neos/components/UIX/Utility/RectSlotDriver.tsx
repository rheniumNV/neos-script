import { member, Member, Component } from "../../../core";
    
    export interface RectSlotDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_position?: member<any>;
    }
    
    export function RectSlotDriver(props: RectSlotDriverInput){
      const { id, persistentId, updateOrder, Enabled,
_position, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.RectSlotDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: ID0 */  isRaw={typeof _position === "object" && "isRaw" in _position && _position.isRaw ? true : undefined} />
        </Component>
      );
    };
    