import cv2
import numpy as np
import sys

# Load image
img = cv2.imread(sys.argv[1])
if img is None:
    print("Could not load image")
    sys.exit(1)

# The video is on the right. Let's sample a pixel somewhere in the video area.
# In the image (approx 930x350), let's sample x=700, y=200
h, w, c = img.shape
y = int(h * 0.5)
x = int(w * 0.8)

b, g, r = img[y, x]
print(f"Color at ({x}, {y}): R={r}, G={g}, B={b}")
print(f"Hex: #{r:02x}{g:02x}{b:02x}")
