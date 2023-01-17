import { member, Member, Component } from "../../../core";
    
    export interface DynamicReferenceVariableDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VariableName?: member<any>;
Target?: member<any>;
DefaultTarget?: member<any>;
    }
    
    export function DynamicReferenceVariableDriver_T(props: DynamicReferenceVariableDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
VariableName,
Target,
DefaultTarget, } = props;
    
      return (
        <Component type={`FrooxEngine.DynamicReferenceVariableDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName} /* default: null */  />
<Member type={`FrooxEngine.RefDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="DefaultTarget" id={typeof DefaultTarget === "object" && "id" in DefaultTarget ? DefaultTarget?.id : undefined} value={typeof DefaultTarget === "object" && "value" in DefaultTarget ? DefaultTarget?.value : DefaultTarget} /* default: null */  />
        </Component>
      );
    };
    