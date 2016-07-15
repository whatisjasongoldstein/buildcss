#!/usr/bin/env python

import os
import sys
import beagle

from src import index

PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(PROJECT_DIR, "src")
DIST_DIR = os.path.join(PROJECT_DIR, "dist")

app = beagle.App(index, src=SRC_DIR, dist=DIST_DIR, watch="dev" in sys.argv)
