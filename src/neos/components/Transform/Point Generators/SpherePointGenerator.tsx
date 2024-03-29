import { member, Member, Component } from "../../../core";
    
    export interface SpherePointGeneratorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
Shell?: member<boolean>;
    }
    
    export function SpherePointGenerator(props: SpherePointGeneratorInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
Shell, } = props;
    
      return (
        <Component type="FrooxEngine.SpherePointGenerator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Shell" id={typeof Shell === "object" && "id" in Shell ? Shell?.id : undefined} value={typeof Shell === "object" && "value" in Shell ? Shell?.value : Shell} /* default: false */  isRaw={typeof Shell === "object" && "isRaw" in Shell && Shell.isRaw ? true : undefined} />
        </Component>
      );
    };
    