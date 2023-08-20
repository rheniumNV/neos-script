import { member, Member, Component } from "../../../core";
    
    export interface EmotivRawDataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HeadsetUser?: member<any>;
HeadsetConnected?: member<boolean>;
ProfileLoaded?: member<boolean>;
CurrentProfile?: member<any>;
HeadsetId?: member<any>;
Face?: member<any>;
MentalCommand?: member<any>;
PerformanceMetrics?: member<any>;
    }
    
    export function EmotivRawData(props: EmotivRawDataInput){
      const { id, persistentId, updateOrder, Enabled,
HeadsetUser,
HeadsetConnected,
ProfileLoaded,
CurrentProfile,
HeadsetId,
Face,
MentalCommand,
PerformanceMetrics, } = props;
    
      return (
        <Component type="FrooxEngine.EmotivRawData" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="HeadsetUser" id={typeof HeadsetUser === "object" && "id" in HeadsetUser ? HeadsetUser?.id : undefined} value={typeof HeadsetUser === "object" && "value" in HeadsetUser ? HeadsetUser?.value : HeadsetUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof HeadsetUser === "object" && "isRaw" in HeadsetUser && HeadsetUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HeadsetConnected" id={typeof HeadsetConnected === "object" && "id" in HeadsetConnected ? HeadsetConnected?.id : undefined} value={typeof HeadsetConnected === "object" && "value" in HeadsetConnected ? HeadsetConnected?.value : HeadsetConnected} /* default: false */  isRaw={typeof HeadsetConnected === "object" && "isRaw" in HeadsetConnected && HeadsetConnected.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProfileLoaded" id={typeof ProfileLoaded === "object" && "id" in ProfileLoaded ? ProfileLoaded?.id : undefined} value={typeof ProfileLoaded === "object" && "value" in ProfileLoaded ? ProfileLoaded?.value : ProfileLoaded} /* default: false */  isRaw={typeof ProfileLoaded === "object" && "isRaw" in ProfileLoaded && ProfileLoaded.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CurrentProfile" id={typeof CurrentProfile === "object" && "id" in CurrentProfile ? CurrentProfile?.id : undefined} value={typeof CurrentProfile === "object" && "value" in CurrentProfile ? CurrentProfile?.value : CurrentProfile} /* default: <i>null</i> */  isRaw={typeof CurrentProfile === "object" && "isRaw" in CurrentProfile && CurrentProfile.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="HeadsetId" id={typeof HeadsetId === "object" && "id" in HeadsetId ? HeadsetId?.id : undefined} value={typeof HeadsetId === "object" && "value" in HeadsetId ? HeadsetId?.value : HeadsetId} /* default: <i>null</i> */  isRaw={typeof HeadsetId === "object" && "isRaw" in HeadsetId && HeadsetId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.EmotivRawData+FaceData`} name="Face" id={typeof Face === "object" && "id" in Face ? Face?.id : undefined} value={typeof Face === "object" && "value" in Face ? Face?.value : Face} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.EmotivRawData\+FaceData,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Face === "object" && "isRaw" in Face && Face.isRaw ? true : undefined} />
<Member type={`FrooxEngine.EmotivRawData+MentalCommandData`} name="MentalCommand" id={typeof MentalCommand === "object" && "id" in MentalCommand ? MentalCommand?.id : undefined} value={typeof MentalCommand === "object" && "value" in MentalCommand ? MentalCommand?.value : MentalCommand} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.EmotivRawData\+MentalCommandData,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof MentalCommand === "object" && "isRaw" in MentalCommand && MentalCommand.isRaw ? true : undefined} />
<Member type={`FrooxEngine.EmotivRawData+PerformanceMetricsData`} name="PerformanceMetrics" id={typeof PerformanceMetrics === "object" && "id" in PerformanceMetrics ? PerformanceMetrics?.id : undefined} value={typeof PerformanceMetrics === "object" && "value" in PerformanceMetrics ? PerformanceMetrics?.value : PerformanceMetrics} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.EmotivRawData\+PerformanceMetricsData,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof PerformanceMetrics === "object" && "isRaw" in PerformanceMetrics && PerformanceMetrics.isRaw ? true : undefined} />
        </Component>
      );
    };
    