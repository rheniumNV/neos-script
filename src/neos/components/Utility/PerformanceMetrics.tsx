import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface PerformanceMetricsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
FPS?: member<number>;
ImmediateFPS?: member<number>;
RenderTime?: member<number>;
TotalEngineUpdateTime?: member<number>;
    }
    
    export function PerformanceMetrics(props: PerformanceMetricsInput){
      const { id, persistentId, updateOrder, Enabled,
User,
FPS,
ImmediateFPS,
RenderTime,
TotalEngineUpdateTime, } = props;
    
      return (
        <Component type="FrooxEngine.PerformanceMetrics" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FPS" id={typeof FPS === "object" && "id" in FPS ? FPS?.id : undefined} value={typeof FPS === "object" && "value" in FPS ? FPS?.value : FPS} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ImmediateFPS" id={typeof ImmediateFPS === "object" && "id" in ImmediateFPS ? ImmediateFPS?.id : undefined} value={typeof ImmediateFPS === "object" && "value" in ImmediateFPS ? ImmediateFPS?.value : ImmediateFPS} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RenderTime" id={typeof RenderTime === "object" && "id" in RenderTime ? RenderTime?.id : undefined} value={typeof RenderTime === "object" && "value" in RenderTime ? RenderTime?.value : RenderTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TotalEngineUpdateTime" id={typeof TotalEngineUpdateTime === "object" && "id" in TotalEngineUpdateTime ? TotalEngineUpdateTime?.id : undefined} value={typeof TotalEngineUpdateTime === "object" && "value" in TotalEngineUpdateTime ? TotalEngineUpdateTime?.value : TotalEngineUpdateTime} /* default: 0 */  />
        </Component>
      );
    };
    