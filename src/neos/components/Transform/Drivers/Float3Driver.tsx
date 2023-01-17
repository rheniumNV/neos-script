import { member, Member, Component } from "../../../core";
    
    export interface Float3DriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
X?: member<any>;
Y?: member<any>;
Z?: member<any>;
Target?: member<any>;
    }
    
    export function Float3Driver(props: Float3DriverInput){
      const { id, persistentId, updateOrder, Enabled,
X,
Y,
Z,
Target, } = props;
    
      return (
        <Component type="FrooxEngine.Float3Driver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Sync\`1[System.Single]]`} name="X" id={typeof X === "object" && "id" in X ? X?.id : undefined} value={typeof X === "object" && "value" in X ? X?.value : X} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Sync\`1[System.Single]]`} name="Y" id={typeof Y === "object" && "id" in Y ? Y?.id : undefined} value={typeof Y === "object" && "value" in Y ? Y?.value : Y} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Sync\`1[System.Single]]`} name="Z" id={typeof Z === "object" && "id" in Z ? Z?.id : undefined} value={typeof Z === "object" && "value" in Z ? Z?.value : Z} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
        </Component>
      );
    };
    