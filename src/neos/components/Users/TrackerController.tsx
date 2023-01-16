import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TrackerControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PositionStreamConfigurator?: member<any>;
RotationStreamConfigurator?: member<any>;
    }
    
    export function TrackerController(props: TrackerControllerInput){
      const { id, persistentId, updateOrder, Enabled,
PositionStreamConfigurator,
RotationStreamConfigurator, } = props;
    
      return (
        <Component type="FrooxEngine.TrackerController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`2[FrooxEngine.ValueStream\`1[BaseX.float3],System.Int32]]`} name="PositionStreamConfigurator" id={typeof PositionStreamConfigurator === "object" && "id" in PositionStreamConfigurator ? PositionStreamConfigurator?.id : undefined} value={typeof PositionStreamConfigurator === "object" && "value" in PositionStreamConfigurator ? PositionStreamConfigurator?.value : PositionStreamConfigurator} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`2[FrooxEngine.ValueStream\`1[BaseX.floatQ],System.Int32]]`} name="RotationStreamConfigurator" id={typeof RotationStreamConfigurator === "object" && "id" in RotationStreamConfigurator ? RotationStreamConfigurator?.id : undefined} value={typeof RotationStreamConfigurator === "object" && "value" in RotationStreamConfigurator ? RotationStreamConfigurator?.value : RotationStreamConfigurator} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    