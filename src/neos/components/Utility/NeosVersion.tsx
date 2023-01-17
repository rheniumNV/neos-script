import { member, Member, Component } from "../../core";
    
    export interface NeosVersionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VersionNumber?: member<any>;
VersionName?: member<any>;
FullVersionString?: member<any>;
BuildYear?: member<any>;
BuildMonth?: member<any>;
BuildDay?: member<any>;
BuildTimeOfDay?: member<any>;
    }
    
    export function NeosVersion(props: NeosVersionInput){
      const { id, persistentId, updateOrder, Enabled,
VersionNumber,
VersionName,
FullVersionString,
BuildYear,
BuildMonth,
BuildDay,
BuildTimeOfDay, } = props;
    
      return (
        <Component type="FrooxEngine.NeosVersion" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="VersionNumber" id={typeof VersionNumber === "object" && "id" in VersionNumber ? VersionNumber?.id : undefined} value={typeof VersionNumber === "object" && "value" in VersionNumber ? VersionNumber?.value : VersionNumber} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="VersionName" id={typeof VersionName === "object" && "id" in VersionName ? VersionName?.id : undefined} value={typeof VersionName === "object" && "value" in VersionName ? VersionName?.value : VersionName} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="FullVersionString" id={typeof FullVersionString === "object" && "id" in FullVersionString ? FullVersionString?.id : undefined} value={typeof FullVersionString === "object" && "value" in FullVersionString ? FullVersionString?.value : FullVersionString} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="BuildYear" id={typeof BuildYear === "object" && "id" in BuildYear ? BuildYear?.id : undefined} value={typeof BuildYear === "object" && "value" in BuildYear ? BuildYear?.value : BuildYear} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="BuildMonth" id={typeof BuildMonth === "object" && "id" in BuildMonth ? BuildMonth?.id : undefined} value={typeof BuildMonth === "object" && "value" in BuildMonth ? BuildMonth?.value : BuildMonth} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="BuildDay" id={typeof BuildDay === "object" && "id" in BuildDay ? BuildDay?.id : undefined} value={typeof BuildDay === "object" && "value" in BuildDay ? BuildDay?.value : BuildDay} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="BuildTimeOfDay" id={typeof BuildTimeOfDay === "object" && "id" in BuildTimeOfDay ? BuildTimeOfDay?.id : undefined} value={typeof BuildTimeOfDay === "object" && "value" in BuildTimeOfDay ? BuildTimeOfDay?.value : BuildTimeOfDay} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
        </Component>
      );
    };
    