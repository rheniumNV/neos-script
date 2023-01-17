import { member, Member, Component } from "../../../core";
    
    export interface SubmeshCharacterControllerModifierInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Parameter?: member<any>;
ModificationMode?: member<any>;
Values?: member<any>;
    }
    
    export function SubmeshCharacterControllerModifier(props: SubmeshCharacterControllerModifierInput){
      const { id, persistentId, updateOrder, Enabled,
Parameter,
ModificationMode,
Values, } = props;
    
      return (
        <Component type="FrooxEngine.SubmeshCharacterControllerModifier" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CharacterControllerParameter]`} name="Parameter" id={typeof Parameter === "object" && "id" in Parameter ? Parameter?.id : undefined} value={typeof Parameter === "object" && "value" in Parameter ? Parameter?.value : Parameter} /* default: MaximumTractionSlope */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CharacterControllerModifier+Mode]`} name="ModificationMode" id={typeof ModificationMode === "object" && "id" in ModificationMode ? ModificationMode?.id : undefined} value={typeof ModificationMode === "object" && "value" in ModificationMode ? ModificationMode?.value : ModificationMode} /* default: Override */  />
<Member type={`FrooxEngine.SyncFieldList\`1[System.Single]`} name="Values" id={typeof Values === "object" && "id" in Values ? Values?.id : undefined} value={typeof Values === "object" && "value" in Values ? Values?.value : Values} /* default: FrooxEngine.SyncFieldList`1[System.Single] */  />
        </Component>
      );
    };
    