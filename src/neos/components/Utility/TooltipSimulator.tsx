import { member, Member, Component } from "../../core";
    
    export interface TooltipSimulatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Tooltip?: member<any>;
SimulatingUser?: member<any>;
Primary?: member<boolean>;
Secondary?: member<boolean>;
Strength?: member<number>;
Axis?: member<[number, number]>;
    }
    
    export function TooltipSimulator(props: TooltipSimulatorInput){
      const { id, persistentId, updateOrder, Enabled,
Tooltip,
SimulatingUser,
Primary,
Secondary,
Strength,
Axis, } = props;
    
      return (
        <Component type="FrooxEngine.TooltipSimulator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IToolTip]`} name="Tooltip" id={typeof Tooltip === "object" && "id" in Tooltip ? Tooltip?.id : undefined} value={typeof Tooltip === "object" && "value" in Tooltip ? Tooltip?.value : Tooltip} /* default: ID0 */  isRaw={typeof Tooltip === "object" && "isRaw" in Tooltip && Tooltip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="SimulatingUser" id={typeof SimulatingUser === "object" && "id" in SimulatingUser ? SimulatingUser?.id : undefined} value={typeof SimulatingUser === "object" && "value" in SimulatingUser ? SimulatingUser?.value : SimulatingUser} /* default: ID0 */  isRaw={typeof SimulatingUser === "object" && "isRaw" in SimulatingUser && SimulatingUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Primary" id={typeof Primary === "object" && "id" in Primary ? Primary?.id : undefined} value={typeof Primary === "object" && "value" in Primary ? Primary?.value : Primary} /* default: false */  isRaw={typeof Primary === "object" && "isRaw" in Primary && Primary.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Secondary" id={typeof Secondary === "object" && "id" in Secondary ? Secondary?.id : undefined} value={typeof Secondary === "object" && "value" in Secondary ? Secondary?.value : Secondary} /* default: false */  isRaw={typeof Secondary === "object" && "isRaw" in Secondary && Secondary.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Strength" id={typeof Strength === "object" && "id" in Strength ? Strength?.id : undefined} value={typeof Strength === "object" && "value" in Strength ? Strength?.value : Strength} /* default: 0 */  isRaw={typeof Strength === "object" && "isRaw" in Strength && Strength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Axis" id={typeof Axis === "object" && "id" in Axis ? Axis?.id : undefined} value={typeof Axis === "object" && "value" in Axis ? Axis?.value : Axis} /* default: [0; 0] */  isRaw={typeof Axis === "object" && "isRaw" in Axis && Axis.isRaw ? true : undefined} />
        </Component>
      );
    };
    