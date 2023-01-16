import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CloudStorageSpaceIndicatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OwnerId?: member<any>;
MemberQuota?: member<boolean>;
ContainerColor?: member<[number, number, number, number]>;
UsedColor?: member<[number, number, number, number]>;
LowSpaceColor?: member<[number, number, number, number]>;
CriticalSpaceColor?: member<[number, number, number, number]>;
LowSpaceThreshold?: member<number>;
CriticalSpaceThreshold?: member<number>;
_ownerLabel?: member<any>;
_usageLabel?: member<any>;
_percentLabel?: member<any>;
_progressBar?: member<any>;
    }
    
    export function CloudStorageSpaceIndicator(props: CloudStorageSpaceIndicatorInput){
      const { id, persistentId, updateOrder, Enabled,
OwnerId,
MemberQuota,
ContainerColor,
UsedColor,
LowSpaceColor,
CriticalSpaceColor,
LowSpaceThreshold,
CriticalSpaceThreshold,
_ownerLabel,
_usageLabel,
_percentLabel,
_progressBar, } = props;
    
      return (
        <Component type="FrooxEngine.CloudStorageSpaceIndicator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="OwnerId" id={typeof OwnerId === "object" && "id" in OwnerId ? OwnerId?.id : undefined} value={typeof OwnerId === "object" && "value" in OwnerId ? OwnerId?.value : OwnerId} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MemberQuota" id={typeof MemberQuota === "object" && "id" in MemberQuota ? MemberQuota?.id : undefined} value={typeof MemberQuota === "object" && "value" in MemberQuota ? MemberQuota?.value : MemberQuota} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ContainerColor" id={typeof ContainerColor === "object" && "id" in ContainerColor ? ContainerColor?.id : undefined} value={typeof ContainerColor === "object" && "value" in ContainerColor ? ContainerColor?.value : ContainerColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="UsedColor" id={typeof UsedColor === "object" && "id" in UsedColor ? UsedColor?.id : undefined} value={typeof UsedColor === "object" && "value" in UsedColor ? UsedColor?.value : UsedColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="LowSpaceColor" id={typeof LowSpaceColor === "object" && "id" in LowSpaceColor ? LowSpaceColor?.id : undefined} value={typeof LowSpaceColor === "object" && "value" in LowSpaceColor ? LowSpaceColor?.value : LowSpaceColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="CriticalSpaceColor" id={typeof CriticalSpaceColor === "object" && "id" in CriticalSpaceColor ? CriticalSpaceColor?.id : undefined} value={typeof CriticalSpaceColor === "object" && "value" in CriticalSpaceColor ? CriticalSpaceColor?.value : CriticalSpaceColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LowSpaceThreshold" id={typeof LowSpaceThreshold === "object" && "id" in LowSpaceThreshold ? LowSpaceThreshold?.id : undefined} value={typeof LowSpaceThreshold === "object" && "value" in LowSpaceThreshold ? LowSpaceThreshold?.value : LowSpaceThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CriticalSpaceThreshold" id={typeof CriticalSpaceThreshold === "object" && "id" in CriticalSpaceThreshold ? CriticalSpaceThreshold?.id : undefined} value={typeof CriticalSpaceThreshold === "object" && "value" in CriticalSpaceThreshold ? CriticalSpaceThreshold?.value : CriticalSpaceThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_ownerLabel" id={typeof _ownerLabel === "object" && "id" in _ownerLabel ? _ownerLabel?.id : undefined} value={typeof _ownerLabel === "object" && "value" in _ownerLabel ? _ownerLabel?.value : _ownerLabel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_usageLabel" id={typeof _usageLabel === "object" && "id" in _usageLabel ? _usageLabel?.id : undefined} value={typeof _usageLabel === "object" && "value" in _usageLabel ? _usageLabel?.value : _usageLabel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_percentLabel" id={typeof _percentLabel === "object" && "id" in _percentLabel ? _percentLabel?.id : undefined} value={typeof _percentLabel === "object" && "value" in _percentLabel ? _percentLabel?.value : _percentLabel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosProgressBar]`} name="_progressBar" id={typeof _progressBar === "object" && "id" in _progressBar ? _progressBar?.id : undefined} value={typeof _progressBar === "object" && "value" in _progressBar ? _progressBar?.value : _progressBar} /* default: ID0 */  />
        </Component>
      );
    };
    