import { member, Member, Component } from "../../../core";
    
    export interface BooleanSwitcherInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoAddChildren?: member<boolean>;
Targets?: member<any>;
ActiveIndex?: member<number>;
    }
    
    export function BooleanSwitcher(props: BooleanSwitcherInput){
      const { id, persistentId, updateOrder, Enabled,
AutoAddChildren,
Targets,
ActiveIndex, } = props;
    
      return (
        <Component type="FrooxEngine.BooleanSwitcher" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddChildren" id={typeof AutoAddChildren === "object" && "id" in AutoAddChildren ? AutoAddChildren?.id : undefined} value={typeof AutoAddChildren === "object" && "value" in AutoAddChildren ? AutoAddChildren?.value : AutoAddChildren} /* default: false */  isRaw={typeof AutoAddChildren === "object" && "isRaw" in AutoAddChildren && AutoAddChildren.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[System.Boolean]]`} name="Targets" id={typeof Targets === "object" && "id" in Targets ? Targets?.id : undefined} value={typeof Targets === "object" && "value" in Targets ? Targets?.value : Targets} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[System.Boolean]] */  isRaw={typeof Targets === "object" && "isRaw" in Targets && Targets.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ActiveIndex" id={typeof ActiveIndex === "object" && "id" in ActiveIndex ? ActiveIndex?.id : undefined} value={typeof ActiveIndex === "object" && "value" in ActiveIndex ? ActiveIndex?.value : ActiveIndex} /* default: 0 */  isRaw={typeof ActiveIndex === "object" && "isRaw" in ActiveIndex && ActiveIndex.isRaw ? true : undefined} />
        </Component>
      );
    };
    