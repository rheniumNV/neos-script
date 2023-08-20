import { member, Member, Component } from "../../../core";
    
    export interface BoundingBoxDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BoundedSource?: member<any>;
Size?: member<any>;
Center?: member<any>;
Padding?: member<[number, number, number]>;
Scale?: member<[number, number, number]>;
    }
    
    export function BoundingBoxDriver(props: BoundingBoxDriverInput){
      const { id, persistentId, updateOrder, Enabled,
BoundedSource,
Size,
Center,
Padding,
Scale, } = props;
    
      return (
        <Component type="FrooxEngine.BoundingBoxDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IBounded]`} name="BoundedSource" id={typeof BoundedSource === "object" && "id" in BoundedSource ? BoundedSource?.id : undefined} value={typeof BoundedSource === "object" && "value" in BoundedSource ? BoundedSource?.value : BoundedSource} /* default: ID0 */  isRaw={typeof BoundedSource === "object" && "isRaw" in BoundedSource && BoundedSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: ID0 */  isRaw={typeof Size === "object" && "isRaw" in Size && Size.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="Center" id={typeof Center === "object" && "id" in Center ? Center?.id : undefined} value={typeof Center === "object" && "value" in Center ? Center?.value : Center} /* default: ID0 */  isRaw={typeof Center === "object" && "isRaw" in Center && Center.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Padding" id={typeof Padding === "object" && "id" in Padding ? Padding?.id : undefined} value={typeof Padding === "object" && "value" in Padding ? Padding?.value : Padding} /* default: [0; 0; 0] */  isRaw={typeof Padding === "object" && "isRaw" in Padding && Padding.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: [0; 0; 0] */  isRaw={typeof Scale === "object" && "isRaw" in Scale && Scale.isRaw ? true : undefined} />
        </Component>
      );
    };
    