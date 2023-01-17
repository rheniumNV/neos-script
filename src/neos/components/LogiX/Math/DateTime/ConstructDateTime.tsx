import { member, Member, Component } from "../../../../core";
    
    export interface ConstructDateTimeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Year?: member<any>;
Month?: member<any>;
Day?: member<any>;
Hour?: member<any>;
Minute?: member<any>;
Second?: member<any>;
Millisecond?: member<any>;
Kind?: member<any>;
    }
    
    export function ConstructDateTime(props: ConstructDateTimeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Year,
Month,
Day,
Hour,
Minute,
Second,
Millisecond,
Kind, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Time.ConstructDateTime" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Year" id={typeof Year === "object" && "id" in Year ? Year?.id : undefined} value={typeof Year === "object" && "value" in Year ? Year?.value : Year} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Month" id={typeof Month === "object" && "id" in Month ? Month?.id : undefined} value={typeof Month === "object" && "value" in Month ? Month?.value : Month} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Day" id={typeof Day === "object" && "id" in Day ? Day?.id : undefined} value={typeof Day === "object" && "value" in Day ? Day?.value : Day} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Hour" id={typeof Hour === "object" && "id" in Hour ? Hour?.id : undefined} value={typeof Hour === "object" && "value" in Hour ? Hour?.value : Hour} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Minute" id={typeof Minute === "object" && "id" in Minute ? Minute?.id : undefined} value={typeof Minute === "object" && "value" in Minute ? Minute?.value : Minute} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Second" id={typeof Second === "object" && "id" in Second ? Second?.id : undefined} value={typeof Second === "object" && "value" in Second ? Second?.value : Second} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Millisecond" id={typeof Millisecond === "object" && "id" in Millisecond ? Millisecond?.id : undefined} value={typeof Millisecond === "object" && "value" in Millisecond ? Millisecond?.value : Millisecond} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.DateTimeKind]`} name="Kind" id={typeof Kind === "object" && "id" in Kind ? Kind?.id : undefined} value={typeof Kind === "object" && "value" in Kind ? Kind?.value : Kind} /* default: ID0 */  />
        </Component>
      );
    };
    