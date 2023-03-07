import { member, Member, Component } from "../../../core";
    
    export interface CheckboxInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
State?: member<boolean>;
TargetState?: member<any>;
CheckVisual?: member<any>;
    }
    
    export function Checkbox(props: CheckboxInput){
      const { id, persistentId, updateOrder, Enabled,
State,
TargetState,
CheckVisual, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.Checkbox" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="State" id={typeof State === "object" && "id" in State ? State?.id : undefined} value={typeof State === "object" && "value" in State ? State?.value : State} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[System.Boolean]]`} name="TargetState" id={typeof TargetState === "object" && "id" in TargetState ? TargetState?.id : undefined} value={typeof TargetState === "object" && "value" in TargetState ? TargetState?.value : TargetState} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="CheckVisual" id={typeof CheckVisual === "object" && "id" in CheckVisual ? CheckVisual?.id : undefined} value={typeof CheckVisual === "object" && "value" in CheckVisual ? CheckVisual?.value : CheckVisual} /* default: ID0 */  />
        </Component>
      );
    };
    