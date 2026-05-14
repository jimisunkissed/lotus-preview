import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useStreamStore } from '@/hooks/stream-store';
import MuxPlayer from '@mux/mux-player-react';
import { PictureProps, PictureStreamProps } from '@/types/table-type';
import React, { useEffect, useMemo, useState } from 'react';
import { Construction, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { getSingleLocal } from '@/lib/api/local-api';

export function StreamModal(): React.ReactNode {
  const { openStream, pictureId, streamId, setOpenStream, setPictureId, setStreamId } = useStreamStore();
  const [picture, setPicture] = useState<PictureProps | undefined>();
  const [stream, setStream] = useState<PictureStreamProps | undefined>();

  const streamUnavailable = useMemo(() => stream?.id && !stream?.asset_playback_id, [stream]);

  const getData = async (): Promise<void> => {
    try {
      const pic = getSingleLocal({ tableId: 'picture', id: pictureId });
      const str = getSingleLocal({ tableId: 'picture_stream', id: streamId });

      setPicture(pic);
      setStream(str);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (pictureId && streamId) getData();
  }, [pictureId, streamId]);

  return (
    <Dialog open={openStream} onOpenChange={setOpenStream}>
      <DialogContent
        className="group flex flex-col h-[80dvh] max-h-[80dvh] w-[80dvw] min-w-[80dvw] p-0 bg-black overflow-hidden"
        showCloseButton={false}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <DialogHeader className="absolute z-10 top-3 left-4 text-md font-medium text-white opacity-0 group-hover:opacity-80 transition-all duration-100 ease-in">
            <DialogTitle>
              {picture?.title} {picture?.release_date ? `(${format(new Date(picture.release_date), 'yyyy')})` : null}
            </DialogTitle>
          </DialogHeader>

          {streamUnavailable ? (
            <div className="flex flex-col w-fit items-center opacity-80 text-white">
              <Construction className="h-8 w-8" />
              <p className="text-sm">You do not have access to this content</p>
            </div>
          ) : !stream || stream?.id !== streamId ? (
            <Loader2 className="text-white h-5 w-5 opacity-80 animate-spin" strokeWidth={3} />
          ) : (
            <MuxPlayer playbackId={stream?.asset_playback_id!} className="h-full w-full bg-black" accentColor="#262626" />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
