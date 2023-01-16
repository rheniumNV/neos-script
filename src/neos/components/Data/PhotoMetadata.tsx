import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface PhotoMetadataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LocationName?: member<any>;
LocationURL?: member<any>;
LocationHost?: member<any>;
LocationAccessLevel?: member<any>;
LocationHiddenFromListing?: member<any>;
TimeTaken?: member<any>;
TakenBy?: member<any>;
NeosVersion?: member<any>;
CameraManufacturer?: member<any>;
CameraModel?: member<any>;
CameraFOV?: member<number>;
Is360?: member<boolean>;
StereoLayout?: member<any>;
    }
    
    export function PhotoMetadata(props: PhotoMetadataInput){
      const { id, persistentId, updateOrder, Enabled,
LocationName,
LocationURL,
LocationHost,
LocationAccessLevel,
LocationHiddenFromListing,
TimeTaken,
TakenBy,
NeosVersion,
CameraManufacturer,
CameraModel,
CameraFOV,
Is360,
StereoLayout, } = props;
    
      return (
        <Component type="FrooxEngine.PhotoMetadata" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="LocationName" id={typeof LocationName === "object" && "id" in LocationName ? LocationName?.id : undefined} value={typeof LocationName === "object" && "value" in LocationName ? LocationName?.value : LocationName} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="LocationURL" id={typeof LocationURL === "object" && "id" in LocationURL ? LocationURL?.id : undefined} value={typeof LocationURL === "object" && "value" in LocationURL ? LocationURL?.value : LocationURL} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.UserRef`} name="LocationHost" id={typeof LocationHost === "object" && "id" in LocationHost ? LocationHost?.id : undefined} value={typeof LocationHost === "object" && "value" in LocationHost ? LocationHost?.value : LocationHost} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[CloudX.Shared.SessionAccessLevel]]`} name="LocationAccessLevel" id={typeof LocationAccessLevel === "object" && "id" in LocationAccessLevel ? LocationAccessLevel?.id : undefined} value={typeof LocationAccessLevel === "object" && "value" in LocationAccessLevel ? LocationAccessLevel?.value : LocationAccessLevel} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Boolean]]`} name="LocationHiddenFromListing" id={typeof LocationHiddenFromListing === "object" && "id" in LocationHiddenFromListing ? LocationHiddenFromListing?.id : undefined} value={typeof LocationHiddenFromListing === "object" && "value" in LocationHiddenFromListing ? LocationHiddenFromListing?.value : LocationHiddenFromListing} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.DateTime]`} name="TimeTaken" id={typeof TimeTaken === "object" && "id" in TimeTaken ? TimeTaken?.id : undefined} value={typeof TimeTaken === "object" && "value" in TimeTaken ? TimeTaken?.value : TimeTaken} /* default: 1/1/0001 12:00:00 AM */  />
<Member type={`FrooxEngine.UserRef`} name="TakenBy" id={typeof TakenBy === "object" && "id" in TakenBy ? TakenBy?.id : undefined} value={typeof TakenBy === "object" && "value" in TakenBy ? TakenBy?.value : TakenBy} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="NeosVersion" id={typeof NeosVersion === "object" && "id" in NeosVersion ? NeosVersion?.id : undefined} value={typeof NeosVersion === "object" && "value" in NeosVersion ? NeosVersion?.value : NeosVersion} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CameraManufacturer" id={typeof CameraManufacturer === "object" && "id" in CameraManufacturer ? CameraManufacturer?.id : undefined} value={typeof CameraManufacturer === "object" && "value" in CameraManufacturer ? CameraManufacturer?.value : CameraManufacturer} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CameraModel" id={typeof CameraModel === "object" && "id" in CameraModel ? CameraModel?.id : undefined} value={typeof CameraModel === "object" && "value" in CameraModel ? CameraModel?.value : CameraModel} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CameraFOV" id={typeof CameraFOV === "object" && "id" in CameraFOV ? CameraFOV?.id : undefined} value={typeof CameraFOV === "object" && "value" in CameraFOV ? CameraFOV?.value : CameraFOV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Is360" id={typeof Is360 === "object" && "id" in Is360 ? Is360?.id : undefined} value={typeof Is360 === "object" && "value" in Is360 ? Is360?.value : Is360} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StereoLayout]`} name="StereoLayout" id={typeof StereoLayout === "object" && "id" in StereoLayout ? StereoLayout?.id : undefined} value={typeof StereoLayout === "object" && "value" in StereoLayout ? StereoLayout?.value : StereoLayout} /* default: None */  />
        </Component>
      );
    };
    