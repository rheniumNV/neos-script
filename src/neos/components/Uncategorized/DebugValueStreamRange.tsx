import { member, Member, Component } from "../../core";
    
    export interface DebugValueStreamRangeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Stream?: member<any>;
positionDrive?: member<any>;
sizeDrive?: member<any>;
    }
    
    export function DebugValueStreamRange(props: DebugValueStreamRangeInput){
      const { id, persistentId, updateOrder, Enabled,
Stream,
positionDrive,
sizeDrive, } = props;
    
      return (
        <Component type="FrooxEngine.DebugValueStreamRange" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float3]]`} name="Stream" id={typeof Stream === "object" && "id" in Stream ? Stream?.id : undefined} value={typeof Stream === "object" && "value" in Stream ? Stream?.value : Stream} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="positionDrive" id={typeof positionDrive === "object" && "id" in positionDrive ? positionDrive?.id : undefined} value={typeof positionDrive === "object" && "value" in positionDrive ? positionDrive?.value : positionDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="sizeDrive" id={typeof sizeDrive === "object" && "id" in sizeDrive ? sizeDrive?.id : undefined} value={typeof sizeDrive === "object" && "value" in sizeDrive ? sizeDrive?.value : sizeDrive} /* default: ID0 */  />
        </Component>
      );
    };
    