import { member, Member, Component } from "../../../core";
    
    export interface StorageUsageStatusInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HasValidData?: member<any>;
StorageBytes?: member<any>;
UsageBytes?: member<any>;
UsageRatio?: member<any>;
StorageString?: member<any>;
UsageString?: member<any>;
RatioString?: member<any>;
    }
    
    export function StorageUsageStatus(props: StorageUsageStatusInput){
      const { id, persistentId, updateOrder, Enabled,
HasValidData,
StorageBytes,
UsageBytes,
UsageRatio,
StorageString,
UsageString,
RatioString, } = props;
    
      return (
        <Component type="FrooxEngine.StorageUsageStatus" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasValidData" id={typeof HasValidData === "object" && "id" in HasValidData ? HasValidData?.id : undefined} value={typeof HasValidData === "object" && "value" in HasValidData ? HasValidData?.value : HasValidData} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int64]`} name="StorageBytes" id={typeof StorageBytes === "object" && "id" in StorageBytes ? StorageBytes?.id : undefined} value={typeof StorageBytes === "object" && "value" in StorageBytes ? StorageBytes?.value : StorageBytes} /* default: FrooxEngine.RawOutput`1[System.Int64] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int64]`} name="UsageBytes" id={typeof UsageBytes === "object" && "id" in UsageBytes ? UsageBytes?.id : undefined} value={typeof UsageBytes === "object" && "value" in UsageBytes ? UsageBytes?.value : UsageBytes} /* default: FrooxEngine.RawOutput`1[System.Int64] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="UsageRatio" id={typeof UsageRatio === "object" && "id" in UsageRatio ? UsageRatio?.id : undefined} value={typeof UsageRatio === "object" && "value" in UsageRatio ? UsageRatio?.value : UsageRatio} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="StorageString" id={typeof StorageString === "object" && "id" in StorageString ? StorageString?.id : undefined} value={typeof StorageString === "object" && "value" in StorageString ? StorageString?.value : StorageString} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="UsageString" id={typeof UsageString === "object" && "id" in UsageString ? UsageString?.id : undefined} value={typeof UsageString === "object" && "value" in UsageString ? UsageString?.value : UsageString} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="RatioString" id={typeof RatioString === "object" && "id" in RatioString ? RatioString?.id : undefined} value={typeof RatioString === "object" && "value" in RatioString ? RatioString?.value : RatioString} /* default: FrooxEngine.RawOutput`1[System.String] */  />
        </Component>
      );
    };
    