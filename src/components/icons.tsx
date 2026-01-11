/**
 * Qwikified Lucide icons
 * Wraps React Lucide icons to work with Qwik
 */
import { qwikify$ } from '@builder.io/qwik-react';
import {
  ArrowLeft as ArrowLeftReact,
  Upload as UploadReact,
  CheckCircle as CheckCircleReact,
  RefreshCw as RefreshCwReact,
  AlertCircle as AlertCircleReact,
  Download as DownloadReact,
  Globe as GlobeReact,
  ChevronDown as ChevronDownReact,
  Menu as MenuReact,
  X as XReact,
  ArrowLeftRight as ArrowLeftRightReact,
  Eye as EyeReact,
  Minimize2 as Minimize2React,
  Shield as ShieldReact,
  Star as StarReact,
} from 'lucide-react';

// Export qwikified icons
export const ArrowLeft = qwikify$(ArrowLeftReact);
export const Upload = qwikify$(UploadReact);
export const CheckCircle = qwikify$(CheckCircleReact);
export const RefreshCw = qwikify$(RefreshCwReact);
export const AlertCircle = qwikify$(AlertCircleReact);
export const Download = qwikify$(DownloadReact);
export const Globe = qwikify$(GlobeReact);
export const ChevronDown = qwikify$(ChevronDownReact);
export const Menu = qwikify$(MenuReact);
export const X = qwikify$(XReact);
export const ArrowLeftRight = qwikify$(ArrowLeftRightReact);
export const Eye = qwikify$(EyeReact);
export const Minimize2 = qwikify$(Minimize2React);
export const Shield = qwikify$(ShieldReact);
export const Star = qwikify$(StarReact);
