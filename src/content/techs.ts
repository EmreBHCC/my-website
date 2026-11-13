import {
  siAndroidstudio, siBootstrap, siClaude, siCplusplus, siDart, siFirebase, siFlutter, siGit, siGithub,
  siHtml5, siJavascript, siNumpy, siOpencv, siOpenjdk, siProteus, siPython, siPytorch, siReact,
  siRoboflow, siTensorflow, siUltralytics, siUnity, siUnrealengine, siMysql, siGooglecloud, siYolo,
} from 'simple-icons';

/** Hover önizlemesi olan teknolojiler: anahtar, sitede görünen etiketin küçük harfli hali. */
export interface TechInfo {
  name: string;
  /** simple-icons yolu (24x24 viewBox) */
  path: string;
  /** Marka rengi, # olmadan */
  hex: string;
  href: string;
}

const t = (name: string, i: { path: string; hex: string }, href: string): TechInfo => ({
  name, path: i.path, hex: i.hex, href,
});

export const TECHS: Record<string, TechInfo> = {
  'flutter': t('Flutter', siFlutter, 'https://flutter.dev'),
  'dart': t('Dart', siDart, 'https://dart.dev'),
  'firebase': t('Firebase', siFirebase, 'https://firebase.google.com'),
  'firestore': t('Firestore', siFirebase, 'https://firebase.google.com/docs/firestore'),
  'firebase firestore': t('Firebase Firestore', siFirebase, 'https://firebase.google.com/docs/firestore'),
  'pytorch': t('PyTorch', siPytorch, 'https://pytorch.org'),
  'opencv': t('OpenCV', siOpencv, 'https://opencv.org'),
  'numpy': t('NumPy', siNumpy, 'https://numpy.org'),
  'python': t('Python', siPython, 'https://www.python.org'),
  'roboflow': t('Roboflow', siRoboflow, 'https://roboflow.com'),
  'yolo': t('YOLO', siYolo, 'https://docs.ultralytics.com'),
  'ultralytics': t('Ultralytics', siUltralytics, 'https://www.ultralytics.com'),
  'react': t('React', siReact, 'https://react.dev'),
  'unity': t('Unity', siUnity, 'https://unity.com'),
  'unreal engine (temel)': t('Unreal Engine', siUnrealengine, 'https://www.unrealengine.com'),
  'tensorflow': t('TensorFlow', siTensorflow, 'https://www.tensorflow.org'),
  'javascript': t('JavaScript', siJavascript, 'https://developer.mozilla.org/docs/Web/JavaScript'),
  'java': t('Java', siOpenjdk, 'https://openjdk.org'),
  'c/c++/c#': t('C / C++ / C#', siCplusplus, 'https://isocpp.org'),
  'html/css': t('HTML / CSS', siHtml5, 'https://developer.mozilla.org/docs/Web/HTML'),
  'bootstrap': t('Bootstrap', siBootstrap, 'https://getbootstrap.com'),
  'git/github': t('Git / GitHub', siGit, 'https://github.com'),
  'github': t('GitHub', siGithub, 'https://github.com'),
  'claude code': t('Claude Code', siClaude, 'https://claude.com/claude-code'),
  'android studio': t('Android Studio', siAndroidstudio, 'https://developer.android.com/studio'),
  'proteus': t('Proteus', siProteus, 'https://www.labcenter.com'),
  'sql': t('SQL', siMysql, 'https://www.mysql.com'),
  'cloud storage': t('Cloud Storage', siGooglecloud, 'https://cloud.google.com/storage'),
};

export const techInfo = (label: string): TechInfo | undefined => TECHS[label.trim().toLowerCase()];
