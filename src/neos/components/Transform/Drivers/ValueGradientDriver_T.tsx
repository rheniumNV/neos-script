import { member, Member, Component } from "../../../core";
    
    export interface ValueGradientDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Progress?: member<number>;
Target?: member<any>;
Interpolate?: member<boolean>;
    }
    
    export function ValueGradientDriver_T(props: ValueGradientDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Progress,
Target,
Interpolate, } = props;
    
      return (
        <Component type={`FrooxEngine.ValueGradientDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Progress" id={typeof Progress === "object" && "id" in Progress ? Progress?.id : undefined} value={typeof Progress === "object" && "value" in Progress ? Progress?.value : Progress} /* default: null */  />
<Member type={`FrooxEngine.FieldDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Interpolate" id={typeof Interpolate === "object" && "id" in Interpolate ? Interpolate?.id : undefined} value={typeof Interpolate === "object" && "value" in Interpolate ? Interpolate?.value : Interpolate} /* default: null */  />
        </Component>
      );
    };
    