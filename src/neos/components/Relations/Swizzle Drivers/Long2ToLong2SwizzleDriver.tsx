import { member, Member, Component } from "../../../core";
    
    export interface Long2ToLong2SwizzleDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
Target?: member<any>;
X?: member<number>;
Y?: member<number>;
    }
    
    export function Long2ToLong2SwizzleDriver(props: Long2ToLong2SwizzleDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
Target,
X,
Y, } = props;
    
      return (
        <Component type="FrooxEngine.Long2ToLong2SwizzleDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.long2]]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.long2]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="X" id={typeof X === "object" && "id" in X ? X?.id : undefined} value={typeof X === "object" && "value" in X ? X?.value : X} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Y" id={typeof Y === "object" && "id" in Y ? Y?.id : undefined} value={typeof Y === "object" && "value" in Y ? Y?.value : Y} /* default: 0 */  />
        </Component>
      );
    };
    