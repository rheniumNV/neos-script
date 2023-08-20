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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: 0 */  isRaw={typeof Scale === "object" && "isRaw" in Scale && Scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Repeat" id={typeof Repeat === "object" && "id" in Repeat ? Repeat?.id : undefined} value={typeof Repeat === "object" && "value" in Repeat ? Repeat?.value : Repeat} /* default: 0 */  isRaw={typeof Repeat === "object" && "isRaw" in Repeat && Repeat.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PingPong" id={typeof PingPong === "object" && "id" in PingPong ? PingPong?.id : undefined} value={typeof PingPong === "object" && "value" in PingPong ? PingPong?.value : PingPong} /* default: false */  isRaw={typeof PingPong === "object" && "isRaw" in PingPong && PingPong.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
        </Component>
      );
    };
    