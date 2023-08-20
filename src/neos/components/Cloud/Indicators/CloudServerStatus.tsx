import { member, Member, Component } from "../../../core";
    
    export interface CloudServerStatusInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Status?: member<any>;
ResponseTimeMilliseconds?: member<any>;
LastServerUpdateTime?: member<any>;
LastServerStateFetch?: member<any>;
LastLocalServerResponseTime?: member<any>;
    }
    
    export function CloudServerStatus(props: CloudServerStatusInput){
      const { id, persistentId, updateOrder, Enabled,
Status,
ResponseTimeMilliseconds,
LastServerUpdateTime,
LastServerStateFetch,
LastLocalServerResponseTime, } = props;
    
      return (
        <Component type="FrooxEngine.CloudServerStatus" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[CloudX.Shared.ServerStatus]`} name="Status" id={typeof Status === "object" && "id" in Status ? Status?.id : undefined} value={typeof Status === "object" && "value" in Status ? Status?.value : Status} /* default: FrooxEngine.RawOutput`1[CloudX.Shared.ServerStatus] */  isRaw={typeof Status === "object" && "isRaw" in Status && Status.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="ResponseTimeMilliseconds" id={typeof ResponseTimeMilliseconds === "object" && "id" in ResponseTimeMilliseconds ? ResponseTimeMilliseconds?.id : undefined} value={typeof ResponseTimeMilliseconds === "object" && "value" in ResponseTimeMilliseconds ? ResponseTimeMilliseconds?.value : ResponseTimeMilliseconds} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof ResponseTimeMilliseconds === "object" && "isRaw" in ResponseTimeMilliseconds && ResponseTimeMilliseconds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.DateTime]`} name="LastServerUpdateTime" id={typeof LastServerUpdateTime === "object" && "id" in LastServerUpdateTime ? LastServerUpdateTime?.id : undefined} value={typeof LastServerUpdateTime === "object" && "value" in LastServerUpdateTime ? LastServerUpdateTime?.value : LastServerUpdateTime} /* default: FrooxEngine.RawOutput`1[System.DateTime] */  isRaw={typeof LastServerUpdateTime === "object" && "isRaw" in LastServerUpdateTime && LastServerUpdateTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.DateTime]`} name="LastServerStateFetch" id={typeof LastServerStateFetch === "object" && "id" in LastServerStateFetch ? LastServerStateFetch?.id : undefined} value={typeof LastServerStateFetch === "object" && "value" in LastServerStateFetch ? LastServerStateFetch?.value : LastServerStateFetch} /* default: FrooxEngine.RawOutput`1[System.DateTime] */  isRaw={typeof LastServerStateFetch === "object" && "isRaw" in LastServerStateFetch && LastServerStateFetch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.DateTime]`} name="LastLocalServerResponseTime" id={typeof LastLocalServerResponseTime === "object" && "id" in LastLocalServerResponseTime ? LastLocalServerResponseTime?.id : undefined} value={typeof LastLocalServerResponseTime === "object" && "value" in LastLocalServerResponseTime ? LastLocalServerResponseTime?.value : LastLocalServerResponseTime} /* default: FrooxEngine.RawOutput`1[System.DateTime] */  isRaw={typeof LastLocalServerResponseTime === "object" && "isRaw" in LastLocalServerResponseTime && LastLocalServerResponseTime.isRaw ? true : undefined} />
        </Component>
      );
    };
    