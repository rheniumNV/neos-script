import { member, Member, Component } from "../../../core";
    
    export interface TimeIntDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Scale?: member<number>;
Repeat?: member<number>;
PingPong?: member<boolean>;
Target?: member<any>;
    }
    
    export function TimeIntDriver(props: TimeIntDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Scale,
Repeat,
PingPong,
Target, } = props;
    
      return (
        <Component type="FrooxEngine.TimeIntDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Repeat" id={typeof Repeat === "object" && "id" in Repeat ? Repeat?.id : undefined} value={typeof Repeat === "object" && "value" in Repeat ? Repeat?.value : Repeat} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PingPong" id={typeof PingPong === "object" && "id" in PingPong ? PingPong?.id : undefined} value={typeof PingPong === "object" && "value" in PingPong ? PingPong?.value : PingPong} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
        </Component>
      );
    };
    