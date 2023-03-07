import { member, Member, Component } from "../../core";
    
    export interface GlueInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
GlueMode?: member<any>;
Active?: member<boolean>;
DryTime?: member<number>;
Expire?: member<number>;
GluingUser?: member<any>;
_forceDry?: member<boolean>;
isDrying?: member<boolean>;
dryStartTime?: member<number>;
    }
    
    export function Glue(props: GlueInput){
      const { id, persistentId, updateOrder, Enabled,
GlueMode,
Active,
DryTime,
Expire,
GluingUser,
_forceDry,
isDrying,
dryStartTime, } = props;
    
      return (
        <Component type="FrooxEngine.Glue" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Glue+Mode]`} name="GlueMode" id={typeof GlueMode === "object" && "id" in GlueMode ? GlueMode?.id : undefined} value={typeof GlueMode === "object" && "value" in GlueMode ? GlueMode?.value : GlueMode} /* default: ParentObjects */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Active" id={typeof Active === "object" && "id" in Active ? Active?.id : undefined} value={typeof Active === "object" && "value" in Active ? Active?.value : Active} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DryTime" id={typeof DryTime === "object" && "id" in DryTime ? DryTime?.id : undefined} value={typeof DryTime === "object" && "value" in DryTime ? DryTime?.value : DryTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="Expire" id={typeof Expire === "object" && "id" in Expire ? Expire?.id : undefined} value={typeof Expire === "object" && "value" in Expire ? Expire?.value : Expire} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="GluingUser" id={typeof GluingUser === "object" && "id" in GluingUser ? GluingUser?.id : undefined} value={typeof GluingUser === "object" && "value" in GluingUser ? GluingUser?.value : GluingUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_forceDry" id={typeof _forceDry === "object" && "id" in _forceDry ? _forceDry?.id : undefined} value={typeof _forceDry === "object" && "value" in _forceDry ? _forceDry?.value : _forceDry} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="isDrying" id={typeof isDrying === "object" && "id" in isDrying ? isDrying?.id : undefined} value={typeof isDrying === "object" && "value" in isDrying ? isDrying?.value : isDrying} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="dryStartTime" id={typeof dryStartTime === "object" && "id" in dryStartTime ? dryStartTime?.id : undefined} value={typeof dryStartTime === "object" && "value" in dryStartTime ? dryStartTime?.value : dryStartTime} /* default: 0 */  />
        </Component>
      );
    };
    